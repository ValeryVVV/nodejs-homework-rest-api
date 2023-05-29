const Jimp = require("jimp");

const modifyAvatar = async (imgPath) => {
  const avatar = await Jimp.read(imgPath);
  await avatar
    .autocrop()
    .cover(250, 250)
    .quality(60)
    .greyscale()
    .writeAsync(imgPath);
};

module.exports = modifyAvatar;
