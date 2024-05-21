import React from 'react'
import style from  './Retro.module.css'

import Carousel from 'react-bootstrap/Carousel';


import img1 from '../../../assets/Retro/retro-1.jpg'
import img2 from '../../../assets/Retro/retro-2.jpg'
import img3 from '../../../assets/Retro/retro-3.jpg'
import img4 from '../../../assets/Retro/retro-4.jpg'
import img5 from '../../../assets/Retro/retro-5.jpg'

import bugatti1 from '../../../assets/Retro/retro-bugatti_1.jpg'
import bugatti2 from '../../../assets/Retro/retro-bugatti_2.jpg'
import cadillac1 from '../../../assets/Retro/retro-cadillac_1.jpg'
import cadillac2 from '../../../assets/Retro/retro-cadillac_2.jpg'
import chevrolet1 from '../../../assets/Retro/retro-chevrolet_1.jpg'
import chevrolet2 from '../../../assets/Retro/retro-chevrolet_2.jpg'
import ford1 from '../../../assets/Retro/retro-ford_1.jpg'
import ford2 from '../../../assets/Retro/retro-ford_2.jpg'
import horch1 from '../../../assets/Retro/retro-horch_1.jpg'
import horch2 from '../../../assets/Retro/retro-horch_2.jpg'




const Retro = () => {
  return (
    <div className={style.container_car}>
      <div className={style.block}>
      <div className={style.box}>
        <div className={style.retro}>
          <img src={img1} alt="#" />
          <div className={style.desc_item}>
            <p className={style.retro_name}>Bugatti Atlantic</p>
            <p className={style.retro_desc}>Итальянские автомобили – это абсолютное сочетание цены и качества. И несмотря на то, что простым смертным такая роскошь не по карману, на сегодняшний день марки итальянских производителей чуть ли не самые успешные в мире. Bugatti Atlantic – настоящее произведение искусства. Трудно представить, что когда-то этот автомобиль был в эксплуатации, сегодня на него хочется только любоваться. Особенно оригинально смотрятся наружные швы. Дело в том, что в прототипе все детали кузова были сделаны из сплава с высоким содержанием магния. Конечно, такое решение никак не подходило для серийного производства. Поэтому в серию пошли Bugatti из алюминиевого сплава. А швы решили оставить, так как они придавали машине совершенно неповторимый облик. На сегодняшний день в рабочем состоянии сохранилось всегда два автомобиля, цена каждого из которых превышает сорок миллионов долларов.  Кстати, самым дорогим автомобилем в мире был признан потомок легендарного автомобиля – Bugatti Veiron.</p>
            <p className={style.retro_price}>$36 million</p>
            <p className={style.retro_age}>1936</p>
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
              src={bugatti1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={bugatti2}
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
        <div className={style.retro}>
          <img src={img2} alt="#" />
          <div className={style.desc_item}>
            <p className={style.retro_name}>Кабриолет Horch</p>
            <p className={style.retro_desc}>Кажется, этим авто мечтала бы обзавестись любая принцесса не только прошлых лет, но и самая современная. Кабриолет можно смело назвать уникальным – свет увидели всего пятнадцать экземпляров. Более того, каждый из них собирался вручную, то есть иными словами работа была проделана практически ювелирная – автомобиль действительно куда больше напоминает футуристическую фантазию, нежели реальное средство передвижения. Малое количество моделей объясняется не только сложностью работы по сборке, но и тем, что эта машина предназначалась исключительно для высокопоставленных немецких чиновников.</p>
            <p className={style.retro_price}>$1 million</p>
            <p className={style.retro_age}>1938</p>
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
              <h5>First slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={horch1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={horch2}
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
        <div className={style.retro}>
          <img src={img3} alt="#" />
          <div className={style.desc_item}>
            <p className={style.retro_name}>Chevrolet Corvette</p>
            <p className={style.retro_desc}>Этот автомобиль был выпущен в 1963-м году, полностью перевернув все тогдашние представления о спортивном автомобиле. Первая модель, так же как и многие другие культовые машины, была собрана вручную, претерпев в ходе работы множество изменений, но самым главным потрясением для автолюбителей прошлых лет стала небывалая скорость, до которой мог разгоняться новый спорткар – целых 100 километров в час! Для середины 60-х предел практически недостижимый. На сегодняшний день осталось всего 300 экземпляров Chevrolet Corvette. Все до единой они принадлежат частным владельцам. Примечательно, что две самых первых модели загадочным образом исчезли, об их местонахождении ничего не известно.</p>
            <p className={style.retro_price}>$110 000</p>
            <p className={style.retro_age}>1963</p>
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
              src={chevrolet1}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={chevrolet2}
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
      <div className={style.retro}>
        <img src={img4} alt="#" />
        <div className={style.desc_item}>
          <p className={style.retro_name}>Cadillac Eldorado</p>
          <p className={style.retro_desc}>Куда больше он напоминает космический корабль, нежели земной автомобиль. Главным образом, благодаря двум фишкам дизайна: обтекаемый (что совсем не характерно для 1950-х годов) корпус и невероятным образом оформленный бампер. Последний, видимо, и создаёт впечатление какой-то инопланетности.</p>
          <p className={style.retro_price}>$117 410</p>
          <p className={style.retro_age}>1960</p>
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
            src={cadillac1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={cadillac2}
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
      <div className={style.retro}>
        <img src={img5} alt="#" />
        <div className={style.desc_item}>
          <p className={style.retro_name}>Ford Thunderbird</p>
          <p className={style.retro_desc}>Форд - автомобиль известный и популярный по сей день. Правда, мало кто знает, что когда-то отец одной из самых богатых автомобильных корпораций на планете специально выпускал низкокачественные авто. Делалось это совсем не по причине плохой квалификации, напротив, господину Форду изобретательности было не занимать – плохие машины он впускал лишь затем, чтобы заработать побольше денег, ведь если продавать только хорошие средства для передвижения, новые авто просто никому не будут нужны. Ford Thunderbird как раз один из них – плохое качество в сочетании с идеальной внешностью.</p>
          <p className={style.retro_price}>$89 500</p>
          <p className={style.retro_age}>1955</p>
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
            src={ford1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ford2}
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

export default Retro