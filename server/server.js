const express = require("express");
const bodyParser = require("body-parser");

const server = express();
const router = express.Router();

server.use(bodyParser.text());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(
  router.get("/api/flats", (req, res) => {
    res.status(200).send({
      success: "true",
      list: [
        {
          type: "flat",
          id: 1,
          attributes: {
            title: "3-х комнатная на Минской",
            rooms: 3,
            mainImgSrc:
              "https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg",
            price: 50000,
            address: {
              city: "Tyumen",
              street: "Минская",
              house: "3a",
              room: "123"
            },
            area: 134,
            unit: "квм"
          },
          relationships: {
            type: "agent",
            id: 2,
            attributes: {
              agentImgSrc:
                "https://avatars.mds.yandex.net/get-realty/1935632/offer.agent.8310251212921815956.2872465993818012246/sale_agent",
              first_name: "Василий",
              last_name: "Дроздов",
              middle_name: "Михайлович"
            }
          }
        },
        {
          type: "flat",
          id: 2,
          attributes: {
            title: "3-х комнатная на Минской",
            rooms: 3,
            mainImgSrc:
              "https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg",
            price: 1111,
            address: {
              city: "Tyumen",
              street: "Минская",
              house: "3a",
              room: "123"
            },
            area: 134,
            unit: "квм"
          },
          relationships: {
            type: "agent",
            id: 3,
            attributes: {
              agentImgSrc:
                "https://avatars.mds.yandex.net/get-realty/1935632/offer.agent.8310251212921815956.2872465993818012246/sale_agent",
              first_name: "Василий",
              last_name: "Дроздов",
              middle_name: "Михайлович"
            }
          }
        },
        {
          type: "flat",
          id: 4,
          attributes: {
            title: "3-х комнатная на Минской",
            rooms: 3,
            mainImgSrc:
              "https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg",
            price: 23123,
            address: {
              city: "Tyumen",
              street: "Минская",
              house: "3a",
              room: "123"
            },
            area: 134,
            unit: "квм"
          },
          relationships: {
            type: "agent",
            id: 5,
            attributes: {
              agentImgSrc:
                "https://avatars.mds.yandex.net/get-realty/1935632/offer.agent.8310251212921815956.2872465993818012246/sale_agent",
              first_name: "Василий",
              last_name: "Дроздов",
              middle_name: "Михайлович"
            }
          }
        },
        {
          type: "flat",
          id: 6,
          attributes: {
            title: "3-х комнатная на Минской",
            rooms: 3,
            mainImgSrc:
              "https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg",
            price: 4413,
            address: {
              city: "Tyumen",
              street: "Минская",
              house: "3a",
              room: "123"
            },
            area: 134,
            unit: "квм"
          },
          relationships: {
            type: "agent",
            id: 2,
            attributes: {
              agentImgSrc:
                "https://avatars.mds.yandex.net/get-realty/1935632/offer.agent.8310251212921815956.2872465993818012246/sale_agent",
              first_name: "Василий",
              last_name: "Дроздов",
              middle_name: "Михайлович"
            }
          }
        },
        {
          type: "flat",
          id: 7,
          attributes: {
            title: "1 комнатная на Барабаинской",
            rooms: 2,
            mainImgSrc:
              "https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg",
            price: 676666,
            address: {
              city: "Tyumen",
              street: "Барабинская",
              house: "12",
              room: "45"
            },
            area: 34,
            unit: "квм"
          },
          relationships: {
            type: "agent",
            id: 10,
            attributes: {
              agentImgSrc:
                "https://avatars.mds.yandex.net/get-realty/1935632/offer.agent.8310251212921815956.2872465993818012246/sale_agent",
              first_name: "Михаил",
              last_name: "Иванов",
              middle_name: "Демидович"
            }
          }
        },
        {
          type: "flat",
          id: 8,
          attributes: {
            title: "Квартира Ленина",
            rooms: 4,
            mainImgSrc:
              "https://kvartirka.com/blog/wp-content/uploads/2020/01/CTjBGLa2AdB1W7UbfBMMYdaTp9FxuUfBv7Cn.jpg",
            price: 1234123,
            address: {
              city: "Tyumen",
              street: "Ленина",
              house: "134",
              room: "24"
            },
            area: 134,
            unit: "квм"
          },
          relationships: {
            type: "agent",
            id: 44,
            attributes: {
              agentImgSrc:
                "https://avatars.mds.yandex.net/get-realty/1935632/offer.agent.8310251212921815956.2872465993818012246/sale_agent",
              first_name: "Степан",
              last_name: "Карачаев",
              middle_name: "Иванович"
            }
          }
        }
      ]
    });
  })
);

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
