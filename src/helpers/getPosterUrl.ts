import noPhoto from "../assets/no_photo.jpg";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p";

export const getPosterUrl = (path: string | null, size: number) => {
    if (!path) {
        return noPhoto;
    }
    return `${BASE_IMAGE_URL}/w${size}${path}`;
};