import React from 'react'
import style from  './Premium.module.css'

import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../../assets/Premium/premium-1.jpg'
import img2 from '../../../assets/Premium/premium-2.jpg'
import img3 from '../../../assets/Premium/premium-3.jpg'
// import img4 from '../../../assets/Premium/premium-4.jpg'
// import img5 from '../../../assets/Premium/premium-5.jpg'

// import img1 from '../../../assets/Cabriolet/cabriolet-1.jpg'
// import img2 from '../../../assets/Cabriolet/cabriolet-2.jpg'
// import img3 from '../../../assets/Cabriolet/cabriolet-3.jpg'
import img4 from '../../../assets/Cabriolet/cabriolet-4.jpg'
import img5 from '../../../assets/Cabriolet/cabriolet-5.jpg'


const Premium = () => {
  return (
    <div className={style.container_car}>
      <div className={style.block}>
      <div className={style.box}>
        <div className={style.premium}>
          <img className={style.image} src={img1} alt="#" />
          <div className={style.desc_item}>
            <p className={style.premium_name}>Mercedes-Benz EQE AMG</p>
            <p className={style.premium_desc}>Mercedes-Benz выпускает автомобили, сочетающие спортивные характеристики с шикарным комфортом, с конца Второй мировой войны, что делает их очевидным выбором для тех, кто ищет такое сочетание. 2022 год был знаменательным для Mercedes-Benz, поскольку именно в этом году компания приняла решение открыть новое отделение.</p>
            <p className={style.premium_price}>$60,000</p>
            <p className={style.premium_age}>2022 </p>
          </div>
        </div>
      </div>
        <div className={style.slider}>

          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>

    <div className={style.block}>
      <div className={style.box}>
        <div className={style.premium}>
          <img src={img2} alt="#" />
          <div className={style.desc_item}>
            <p className={style.premium_name}>Cadillac Escalade</p>
            <p className={style.premium_desc}>Тот факт, что Cadillac смог конкурировать лицом к лицу с самыми престижными производителями отрасли с момента основания компании в 1999 году, является достаточной причиной для того, чтобы отметить появление бренда на рынке. Однако в этом году Cadillac вошел в историю, выпустив Escalade, первый внедорожник премиум-класса компании.</p>
            <p className={style.premium_price}>$115,000</p>
            <p className={style.premium_age}>2016</p>
          </div>
        </div>
      </div>
        <div className={style.slider}>

          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>

    <div className={style.block}>
      <div className={style.box}>
        <div className={style.premium}>
          <img src={img3} alt="#" />
          <div className={style.desc_item}>
            <p className={style.premium_name}>BMW 1 Series</p>
            <p className={style.premium_desc}>Сохранить свои позиции лидера рынка среди лучших автопроизводителей - непростая задача. Самые роскошные и мощные варианты топовых автомобилей BMW служат образцом для всего, что требуется в высокопроизводительных автомобилях премиум-класса. В каждой категории BMW является бесспорным лидером.</p>
            <p className={style.premium_price}>$45,600</p>
            <p className={style.premium_age}>2004</p>
          </div>
        </div>
      </div>
        <div className={style.slider}>

          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img3}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>First slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>

    <div className={style.block}>
    <div className={style.box}>
      <div className={style.premium}>
        <img src={img4} alt="#" />
        <div className={style.desc_item}>
          <p className={style.premium_name}>Ferrari Dino</p>
          <p className={style.premium_desc}>Куда больше он напоминает космический корабль, нежели земной автомобиль. Главным образом, благодаря двум фишкам дизайна: обтекаемый (что совсем не характерно для 1950-х годов) корпус и невероятным образом оформленный бампер. Последний, видимо, и создаёт впечатление какой-то инопланетности.</p>
          <p className={style.premium_price}>$117 410</p>
          <p className={style.premium_age}>1960</p>
        </div>
      </div>
    </div>
      <div className={style.slider}>

        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img4}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>

    <div className={style.block}>
    <div className={style.box}>
      <div className={style.premium}>
        <img src={img5} alt="#" />
        <div className={style.desc_item}>
          <p className={style.premium_name}>Ford Thunderbird</p>
          <p className={style.premium_desc}>Форд - автомобиль известный и популярный по сей день. Правда, мало кто знает, что когда-то отец одной из самых богатых автомобильных корпораций на планете специально выпускал низкокачественные авто. Делалось это совсем не по причине плохой квалификации, напротив, господину Форду изобретательности было не занимать – плохие машины он впускал лишь затем, чтобы заработать побольше денег, ведь если продавать только хорошие средства для передвижения, новые авто просто никому не будут нужны. Ford Thunderbird как раз один из них – плохое качество в сочетании с идеальной внешностью.</p>
          <p className={style.premium_price}>$89 500</p>
          <p className={style.premium_age}>1955</p>
        </div>
      </div>
    </div>
      <div className={style.slider}>

        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={img3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>
    </div>
  )
}

export default Premium