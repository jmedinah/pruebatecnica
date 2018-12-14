import { InMemoryDbService } from "angular-in-memory-web-api";
import { Car } from './models/car';

export class Cars implements InMemoryDbService {
    createDb() {
        const cars: Car[] = [
            {
                carId: 1,
                model: 'Mustang GT',
                year: '2018',
                make: 'ford',
                weight: '2204 Kg',
                HP: '460',
                transmition: 'automatic',
                price: '$102.000',
                pictureUrl: 'http://veh-markets.com/uploads/postfotos/2016-mustang-gt-track-pack-edition-3.jpg',
                description:
                    ' El Mustang está diseñado para adaptarlo a la manera que conduces, hasta el último detalle.Desde el diseño del panel de instrumentos y el sonido de su rugido hasta cómo se siente tomar una curva, esta leyenda nació para que la personalices a tu gusto.Además, el Mustang es el Auto Deportivo Mediano con Más Alta Calificación de 2018 en Calidad Inicial.'
            },
            {
                carId: 2,
                model: 'camaro six ss',
                year: '2019',
                make: 'chevrolet',
                weight: '2120 Kg',
                HP: '455',
                transmition: 'automatic',
                price: '$100.000',
                pictureUrl: 'https://es.chevrolet.com/content/dam/chevrolet/na/us/english/vdc-collections/2018/performance/camaro/camaro/01-images/2018-camaro-2ss-gaz-trimselector.jpg?imwidth=1200',
                description: 'El Chevrolet Camaro es un auto deportivo producido por el fabricante estadounidense Chevrolet GM. Se clasifica como un pony car y en algunas versiones también como un muscle car. El Camaro surgió como la respuesta de General Motors a su rival más digno durante esta época: el Ford Mustang.'
            },
            {
                carId: 3,
                model: 'CX5',
                year: '2018',
                make: 'mazda',
                weight: '',
                HP: '154-188',
                transmition: 'automatic',
                price: '$59.000',
                pictureUrl: 'https://www.diariomotor.com/imagenes/2016/11/nuevo-mazda-cx-5-01.jpg',
                description: 'La mundialmente galardonada Mazda CX-5 continúa su evolución, convirtiéndose en un referente de su segmento. El lenguaje de DISEÑO KODO “Alma del movimiento” toma como fuente de inspiración la belleza y la identidad japonesa que evocan una constante búsqueda de la perfección, del cuidado en los detalles y del esmero por parte de los artesanos japoneses para crear piezas únicas de la más alta calidad. Mazda CX-5 transmite una imagen más robusta y dinámica en su exterior, y a través de finos acabados interiores, refuerza su apariencia sofisticada y funcional, todo para lograr una experiencia de conducción superior.'
            },
            {
                carId: 4,
                model: 'Q5',
                year: '2018',
                make: 'Audi',
                weight: '2000 Kg',
                HP: '150',
                transmition: 'manual',
                price: '$70.000',
                pictureUrl: 'https://www.audi.com.co/media/Theme_Banners_Banner_Image_Component/6691-banner-20809-image/dh-1400-918e09/c7fd2c75/1544007364/bnn1920x1080-aq5-161007-oe-1-.jpg',
                description: 'odos los detalles del Nuevo Audi Q5 están dominados por el diseño característico de la familia Q, que incorpora el dinamismo y la eficiencia, como el llamativo capó o la línea del techo ligeramente inclinado y la línea cromada de la ventana.'
            },
            {
                carId: 5,
                model: 'Fortuner',
                year: '2019',
                make: 'Toyota',
                weight: '1875 Kg',
                HP: '164',
                transmition: 'manual',
                price: '$42.000',
                pictureUrl: 'http://www.tuyomotor.com/v2_base/file_loader.php?id_file=4357-m21',
                description: 'Diseño exterior moderno, vanguardista y exclusivo que transmite fuerza y elegancia. La Toyota Fortuner SW4 fue creada para ser un vehículo exclusivo con presencia imponente y una personalidad única.La simetría de diseño con líneas redondeadas proporciona la sensación de fuerza y potencia de un vehículo capaz de operar con serenidad en condiciones extremas, con detalles que transmiten dinamismo y elegancia.'
            },
            {
                carId: 6,
                model: 'X6',
                year: '2019',
                make: 'Bmw',
                weight: '2000 kg',
                HP: '450',
                transmition: 'automatic',
                price: '$30.000',
                pictureUrl: 'https://www.bmw.com.co/content/dam/bmw/common/all-models/x-series/x6/2014/At%20a%20glance/topstage-start.jpg/_jcr_content/renditions/cq5dam.resized.img.1680.large.time1489075534572.jpg',
                description:
                    'Potente y atlético: la presencia de un modelo BMW X y la deportividad de un coupé. El BMW X6 transciende todos los límites. Sus motores BMW TwinPower Turbo ofrecen una potente mezcla de dinamismo y eficiencia, y el BMW xDrive ayuda a trasladarla a la carretera.'
            },
            {
                carId: 7,
                model: 'Twizy',
                year: '2018',
                make: 'Renault',
                weight: '800 kg',
                HP: '3CG Electrico',
                transmition: 'automatic',
                price: '$12.000',
                pictureUrl: 'https://www.cdn.renault.com/content/dam/Renault/CO/electric-vehicles/twizy/b09e-twizy/b09e-phase1/hero-zone/hero-images/renault-twizy-range.png.ximg.l_4_m.smart.png',
                description: 'Con un radio de giro de sólo 3.4 metros, Renault Twizy ofrece una experiencia única de manejo. Gracias a este radio de giro fuera de lo normal, Twizy se convierte en un vehículo no sólo manejable sino muy reactivo. Se vive mejor en la ciudad con Renault Twizy!'
            },
            {
                carId: 8,
                model: 'Captur',
                year: '2019',
                make: 'Renault',
                weight: '1750',
                HP: '143',
                transmition: 'automatic',
                price: '$20.000',
                pictureUrl: 'https://www.cdn.renault.com/content/dam/Renault/CO/personal-cars/captur/hero-zone/captur-packshot.png.ximg.l_4_m.smart.png',
                description: 'Durante la historia de la humanidad las joyas han sido utilizadas para resaltar la belleza y enaltecer las actitudes de quien las porta, por eso inspiramos nuestra edición especial Renault CAPTUR con una joya exclusiva creada con cristales de Swarovski®. Porque esta vez y por tiempo limitado puedes tener una de las 300 unidades de esta edición especial.'
            },
            {
                carId: 9,
                model: 'Alaskan',
                year: '2018',
                make: 'Renault',
                weight: '200 kg',
                HP: '190',
                transmition: 'manual',
                price: '$40.000',
                pictureUrl: 'https://www.cdn.renault.com/content/dam/Renault/master/vehicules/u60/renault-u60-reveal-003.jpg.ximg.l_4_m.smart.jpg',
                description: 'La Renault ALASKAN integra en su ADN un diseño moderno e imponente que hace honor a sus capacidades. Cuenta con grandes y esculpidos guardabarros, una robusta e imponente parrilla cromada resaltando la nueva identidad de marca.'
            },
            {
                carId: 10,
                model: 'Mazda 6',
                year: '2019',
                make: 'Mazda',
                weight: '1500 kg',
                HP: '185',
                transmition: 'automatic',
                price: '$35.000',
                pictureUrl: 'http://www.mazda.com.co/assets/models/mazda6/heros/heromazda.jpg',
                description: 'Inspirado en el lenguaje de DISEÑO KODO- Alma del movimiento, característico de la marca, Mazda 6 evoluciona en su elegancia y refinamiento, dignos del vehículo insignia de la marca. La TECNOLOGÍA SKYACTIV exclusiva de Mazda, se complementa en este modelo con el Sistema de Control G -Vectoring, y el TURBO DE PRESIÓN DINÁMICA. Mazda 6 cuenta con conectividad de última generación al hacer compatibles con Mazda CONNECT, los sistemas Apple CarPlay & Android Auto. De igual manera, las características en seguridad activa y pasiva, junto con la serie integrada de tecnologías en seguridad de i-ACTIVSENSE, operan en una gama de situaciones más amplia.'
            }
        ];

        return { cars };
    }
}