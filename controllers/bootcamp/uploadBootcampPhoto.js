const path = require('path');

const {Bootcamp} = require('../../models/Bootcamps');

const asyncWrapper = require('../../middlewares/asyncWrapper');


const uploadBootcampPhoto = asyncWrapper(async (req, res, next) => {
    if (!req.files) return next({
        statusCode: 400,
        status: 'fail',
        message: "Upload an image file for the Bootcamp"
    });

    if (!req.files.photo) return next({
        statusCode: 400,
        status: 'fail',
        message: "Upload an image file for the Bootcamp with the key name as photo"
    });

    const upload = req.files.photo;

    if (!upload.mimetype.startsWith('image')) return next({
        statusCode: 400,
        status: 'fail',
        message: "File uploaded cannot be processed as an image"
    });


    if (upload.size > process.env.MAX_FILE_UPLOAD_SIZE) return next({
        statusCode: 400,
        status: 'fail',
        message: `Upload an image less than ${process.env.MAX_FILE_UPLOAD_SIZE} bytes`
    });

    upload.name = `bootcampPhoto_${req.bootcamp._id}${path.parse(upload.name).ext}`;

    const pathToUploadDirectory = path.resolve(__dirname, '..', '..', 'public', 'uploads', 'bootcampPhotos', upload.name);

    upload.mv(`${pathToUploadDirectory}`, async error => {
        if (error) return next({
            statusCode: 500,
            status: 'fail',
            message: `An error occured whilst uploading a file`
        });

        const bootcamp = await Bootcamp.findByIdAndUpdate(req.bootcamp._id, {photo: upload.name}, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                bootcamp
            }
        });
    });
});

module.exports = uploadBootcampPhoto;