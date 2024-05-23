import React from 'react'
import style from  './Cabriolet.module.css'

import Carousel from 'react-bootstrap/Carousel';

import img1 from '../../../assets/Cabriolet/cabriolet-1.jpg'
import img2 from '../../../assets/Cabriolet/cabriolet-2.jpg'
import img3 from '../../../assets/Cabriolet/cabriolet-3.jpg'
import img4 from '../../../assets/Cabriolet/cabriolet-4.jpg'
import img5 from '../../../assets/Cabriolet/cabriolet-5.jpg'

import porsche1 from '../../../assets/Cabriolet/cabriolet_porsche-1.jpg'
import porsche2 from '../../../assets/Cabriolet/cabriolet_porsche-2.jpg'
import jaguar1 from '../../../assets/Cabriolet/cabriolet_jaguar-1.jpg'
import jaguar2 from '../../../assets/Cabriolet/cabriolet_jaguar-2.jpg'
import ferrari1 from '../../../assets/Cabriolet/cabriolet_ferrari-1.jpg'
import ferrari2 from '../../../assets/Cabriolet/cabriolet_ferrari-2.jpg'
import bently1 from '../../../assets/Cabriolet/cabriolet_bently-1.jpg'
import bently2 from '../../../assets/Cabriolet/cabriolet_bently-2.jpg'
import bmw1 from '../../../assets/Cabriolet/cabriolet_bmw-1.jpg'
import bmw2 from '../../../assets/Cabriolet/cabriolet_bmw-2.jpg'

const Cabriolet = () => {
  return (
    <div className={style.container_car}>
      <div className={style.block}>
      <div className={style.box}>
        <div className={style.cabriolet}>
          <img className={style.image} src={img1} alt="#" />
          <div className={style.desc_item}>
            <p className={style.cabriolet_name}>Porsche 911 Carrera S Cabriolet</p>
            <p className={style.cabriolet_desc}>Со сменой поколения открытая версия 911-го по ощущениям стала еще ближе к купе. В Porsche основательно переработали шасси, улучшили аэродинамику мягкой крыши и усилили кузов. Двигатели тоже стали более эффективными. На версии Carrera S шестицилиндровый «оппозитник» с двойным турбонаддувом развивает 450 л. с. и 530 ньютон-метров. С фирменным пакетом Sport Chrono и семиступенчатым «роботом» PDK разгон 0–100 км/ч занимает 3,7 секунды.</p>
            <p className={style.cabriolet_price}>$102 366</p>
            <p className={style.cabriolet_age}>1936</p>
          </div>
        </div>
      </div>
        <div className={style.slider}>

          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img1}
              alt="Cabriolet-blue"
            />
            <Carousel.Caption>
              <h5>Porsche-blue</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={porsche1}
              alt="Cabriolet-red"
            />
            <Carousel.Caption>
              <h5>Porsche-red</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={porsche2}
              alt="Cabriolet-green"
            />
            <Carousel.Caption>
              <h5>Porsche-green</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>

    <div className={style.block}>
      <div className={style.box}>
        <div className={style.cabriolet}>
          <img className={style.image} src={img2} alt="#" />
          <div className={style.desc_item}>
            <p className={style.cabriolet_name}>Jaguar F-Type R AWD </p>
            <p className={style.cabriolet_desc}>Споры вокруг новой оптики, которую британский родстер примерил после очередного рестайлинга, не утихают уже несколько месяцев. Как это часто бывает, должно пройти еще какое-то время, чтобы люди привыкли к облику новинки. Под капотом все тот же V8 с приводным нагнетателем, но теперь его мощность довели до 575 л. с., а крутящий момент составляет 700 ньютон-метров.</p>
            <p className={style.cabriolet_price}>$116 055</p>
            <p className={style.cabriolet_age}>1938</p>
          </div>
        </div>
      </div>
        <div className={style.slider}>

          <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={img2}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>jaguar-white</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jaguar1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>jaguar-yellow</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={jaguar2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>jaguar-black</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>

    <div className={style.block}>
      <div className={style.box}>
        <div className={style.cabriolet}>
          <img className={style.image} src={img3} alt="#" />
          <div className={style.desc_item}>
            <p className={style.cabriolet_name}>Ferrari 488 Pista Spider</p>
            <p className={style.cabriolet_desc}>Открытая версия 488 Pista сохранила не только характер и темперамент берлинетты, но и ключевые динамические показатели. Первую сотню родстер набирает за фантастические 2,85 с, а максимальная скорость двухдверки составляет 340 км в час. И это несмотря на прибавку в сухой массе на 91 кг. Наддувный V8 объемом 3,9 л версия Spider унаследовала от купе без каких-либо изменений: двигатель выдает те же 720 л. с. и 770 ньютон-метров.</p>
            <p className={style.cabriolet_price}>$253 040</p>
            <p className={style.cabriolet_age}>1963</p>
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
              <h5>Ferrari-white</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ferrari1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Ferrari-green</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={ferrari2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Ferrari-gray</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        </div>
    </div>

    <div className={style.block}>
    <div className={style.box}>
      <div className={style.cabriolet}>
        <img className={style.image} src={img4} alt="#" />
        <div className={style.desc_item}>
          <p className={style.cabriolet_name}>Bentley Continental GTC</p>
          <p className={style.cabriolet_desc}>Это один из немногих кабриолетов, на которых можно не только доехать до ближайшего яхт-клуба, но и отправиться в мини-путешествие. К быстрой езде он все равно не располагает, а высокий уровень комфорта позволит легко преодолеть не одну сотню километров. Тем не менее характеристики открытого «гран-турера» тоже впечатляют. 6,0-литровый W12 развивает 635 л. с. и 900 Н·м, что позволяет разгоняться 0–100 км/ч за 3,8 секунды.</p>
          <p className={style.cabriolet_price}>$179 744</p>
          <p className={style.cabriolet_age}>1960</p>
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
            <h5>bentley-white</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bently1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>bentley-pink</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bently2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>bentley-amber</h5>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    </div>

    <div className={style.block}>
    <div className={style.box}>
      <div className={style.cabriolet}>
        <img className={style.image} src={img5} alt="#" />
        <div className={style.desc_item}>
          <p className={style.cabriolet_name}>BMW M8 Competition Cabrio</p>
          <p className={style.cabriolet_desc}>На первый взгляд баварский кабриолет кажется чужаком на этом празднике суперкаров. Но ровно до тех пор, пока вы не загляните в брошюру с техническими характеристиками. Во-первых, наряду с купе M8 Competition, это самая мощная серийная двухдверка в истории BMW. V-образную «восьмерку», знакомую по другим М-моделям, форсировали до 625 л. с. и 750 ньютон-метров. Во-вторых, за счет эффективной полноприводной трансмиссии такой кабриолет ускоряется с места до 100 км/ч за 3,3 секунды. С такими показателями аутсайдером его никак не назовешь.</p>
          <p className={style.cabriolet_price}>$157 056</p>
          <p className={style.cabriolet_age}>1955</p>
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
            src={bmw1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bmw2}
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

export default Cabriolet