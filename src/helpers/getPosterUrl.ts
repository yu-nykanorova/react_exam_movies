import noPhoto from "../assets/no_photo.jpg";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export const getPosterUrl = (path: string | null) => {
    if (!path) {
        return noPhoto;
    }
    return `${BASE_IMAGE_URL}${path}`;
};