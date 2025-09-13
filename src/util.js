// Media Resizer

export const resizeImg = (path, size) => {
	const img = path.match(/media\/screenshots/)
		? path.replace(`media/screenshots`, `media/resize/${size}/-/screenshots`)
		: path.replace("/media/games/", `/media/resize/${size}/-/games/`);
	return img;
};
