import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel style={{ display: "relative" }}>
      <Carousel.Item style={{ display: "relative" }}>
        <img
          style={{ display: "relative" }}
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45018547978270.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45018547912734.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45018548109342.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45011302744094.gif"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45018548043806.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45008612556830.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.tatacliq.com/medias/sys_master/images/45001491513374.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
