import Scraper from "images-scraper";
import randomWords from "random-words";

export default async (req, res) => {
  //   res.status(200).json({ name: "John Doe" });

  if (req.method === "GET") {
    const google = new Scraper({
      puppeteer: {
        headless: true,
      },
    });

    const results = await google.scrape(randomWords(), 1);
    res.send(results);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
};

// const handler = (req, res) => {
//   return res.json({ hello: "world!" });
// };
// export default handler;
