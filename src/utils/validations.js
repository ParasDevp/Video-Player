import * as yup from 'yup';
export const VideoValidation = () => {
    const schema = yup.object({
        video: yup.string().strict(false)
            .required('Video url is required')
            .matches(
                /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
                'Enter correct url!'
            ),
    });
    return schema;
};