import { shortURLModel } from "../model/model.js"; // Ensure the correct file path

export const createURL = async (req, res) => {
  const typedUrl = req.body.fullURL;
  try {
    const urlFound = await shortURLModel.findOne({ fullURL: typedUrl });
    if (urlFound) {
      res.status(409).send("URL FOUND");
    } else {
      const urlCreate = await shortURLModel.create({ fullURL: typedUrl });
      res.status(201).send({ msg: "Short URL created", url: urlCreate });
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
};

export const deleteURL = async (req, res) => {
  try {
    const deletedURL = await shortURLModel.findByIdAndDelete(req.params.id);
    if (!deletedURL) {
      res.status(404).send({ msg: "URL not found" });
    } else {
      res.status(200).send({ msg: "URL deleted" });
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
};

export const getALLURL = async (req, res) => {
  try {
    const findAllURL = await shortURLModel.find().sort({ createdAt: -1 });
    if (!findAllURL.length) {
      res.status(404).send({ message: "Short URLs not found!" });
    } else {
      res.status(200).send(findAllURL);
    }
  } catch (error) {
    res.status(500).send({ message: "Something went wrong" });
  }
};

export const getURL = async (req, res) => {
  const shortID = String(req.params.id);

  try {
    const urlFind = await shortURLModel.findOne({ shortURL: shortID });
    if (!urlFind) {
      res.status(404).send("URL not found");
    } else {
      urlFind.clicks++;
      urlFind.save();
      res.redirect(`${urlFind.fullURL}`);
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
