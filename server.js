const express = require("express");
const sharp = require("sharp");
const multiavatar = require("@multiavatar/multiavatar");

const app = express();
const PORT = process.env.PORT || 3033;

// Rota para retornar o avatar como SVG
app.get("/avatar/:id.svg", async (req, res) => {
    const id = req.params.id || "default";
    const svgCode = multiavatar(id); // Gera o SVG
    
    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svgCode);
});

// Rota para retornar o avatar como PNG
app.get("/avatar/:id.png", async (req, res) => {
    const id = req.params.id || "default";
    const svgCode = multiavatar(id); // Gera o SVG
    
    try {
        const pngBuffer = await sharp(Buffer.from(svgCode))
            .toFormat("png")
            .toBuffer();

        res.setHeader("Content-Type", "image/png");
        res.send(pngBuffer);
    } catch (error) {
        console.error("Erro ao converter SVG para PNG:", error);
        res.status(500).send("Erro ao gerar avatar");
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
