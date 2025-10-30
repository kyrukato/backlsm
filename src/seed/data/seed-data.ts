import { Grades } from "src/common/interface/grades"

interface seedDictionary{
    name: string,
    description: string,
    imageURL: string,
    class: string,
    grade: Grades
}

interface seedData{
    dictionary: seedDictionary[],
}

export const initialData: seedData = {
    dictionary: [
        {
            name:'A',
            description: 'Con la mano dominante se forma un puño cerrado con la palma de la mano hacia el frente y el pulgar se coloca en el costado de la mano.',
            imageURL: '/Abecedario/A.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'B',
            description: 'Con la mano dominante y la palma hacia el frente se extienden los dedos del índice al meñique juntos y el pulgar se dobla hacia el interior de la palma de la mano',
            imageURL: '/Abecedario/B.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'C',
            description: 'Con la mano dominante mostrando el costado de la mano se forma una letra \'C\'',
            imageURL: '/Abecedario/C.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'D',
            description: 'Con la mano dominante mostrando el costado de la mano, los dedos medio, anular y meñique se juntan para tocar el pulgar mientras que el dedo índice permanece extendido',
            imageURL: '/Abecedario/D.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'E',
            description: 'Con la mano dominante mostrando la palma de la mano, los dedos se doblan hacia el interior sin tocar la palma de la mano.',
            imageURL: '/Abecedario/E.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'F',
            description: 'Con la mano dominante mostrando el costado de la mano, el pulgar se coloca pegado al dedo índice mientras éste lo cubre, los dedos medio, anular y meñique permanecen extendidos.',
            imageURL: '/Abecedario/F.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'G',
            description: 'Con la mano dominante mostrando el dorso se extienden los dedos índice y pulgar mientras que el resto de los dedos se doblan hacia la palma de la mano.',
            imageURL: '/Abecedario/G.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'H',
            description: 'Con la mano dominante mostrando el dorso se extienen los dedos índice, medio y pulgar mienttras que el resto se doblan hacia la palma de la mano.',
            imageURL: '/Abecedario/H.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'I',
            description: 'Con la mano dominante mostrando la palma se forma un puño con el dedo meñique extendido.',
            imageURL: '/Abecedario/I.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'J',
            description: 'Con la mano dominante mostrando la palma se forma un puño con el dedo meñique extendido y se hace un movimiento circular de arriba hacia abajo.',
            imageURL: '/Abecedario/J.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'K',
            description: 'Con la mano dominante mostrando el costado de la mano se extienden los dedos índice y medio fromando una \'L\', el pulgar se coloca peqgado al dedo medio mientras que el resto de los dedos se doblan hacia el interior de la palma.',
            imageURL: '/Abecedario/K.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'L',
            description: 'Con la mano dominante se estienden los dedos índice y pulgar formando una \'L\', mientras que el resto de los dedos se doblan hacia el interior de la palma.',
            imageURL: '/Abecedario/L.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'M',
            description: 'Con la mano dominante mostrando el dorso, se extienden juntos los dedos índice, medio y anular apuntando hacia abajo, mientras que los otros dedos se doblan hacia la palma',
            imageURL: '/Abecedario/M.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'N',
            description: 'Con la mano dominante mostrando el dorso, se extienden juntos los dedos índice y medio apuntando hacia abajo, mientras que los otros dedos se doblan hacia la palma',
            imageURL: '/Abecedario/N.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'Ñ',
            description: 'Con la mano dominante mostrando el dorso, se extienden juntos los dedos índice y medio apuntando hacia abajo, mientras que los otros dedos se doblan hacia la palma, se hace un movimiento con la muñeca de izquierda a derecha.',
            imageURL: '/Abecedario/Ñ.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'O',
            description: 'Con la mano dominante mostrando el costado se flexionan los dedos del índice al meñique hacia el interior de la palma tocando el pulgar formando una \'O\'.',
            imageURL: '/Abecedario/O.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'P',
            description: 'Con la mano dominante mostrando el costado se extienden los dedos índice y medio formando una \'L\', el pulgar se coloca tocando la base del dedo medio mientras que los otros dedos se flexionan hacia el interior.',
            imageURL: '/Abecedario/P.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'Q',
            description: 'Con la mano dominante mostrando el dorso, los dedos del medio al meñique se flexionan hacia la plama mientras que los dedos índice y pulgar se flexionan un poco sin tocarse formando una \'C\', mientras se hace un movimiento de la muñeca adelante y atrás.',
            imageURL: '/Abecedario/Q.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'R',
            description: 'Con la mano dominante mostrando la palma, se flexionan los dedos anular, meñique y pulgar hacia la palma de la mano, mientras que con los dedos índice y medio se entrelazan.',
            imageURL: '/Abecedario/R.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'S',
            description: 'Con la mano dominante mostrando la palma, se hace un puño donde el pulgar cubre los dedos.',
            imageURL: '/Abecedario/S.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'T',
            description: 'Con la mano dominante mostrando la palma, se hace un puño donde el pulgar se coloca entre los dedos índice y medio.',
            imageURL: '/Abecedario/T.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'U',
            description: 'Con la mano dominanre mostrando la palma, se flexionan los dedos anular, meñique y pulgar hacia el interior de la palma, mientras que los dedos índice y medio se extienen permaneciendo juntos.',
            imageURL: '/Abecedario/U.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'V',
            description: 'Con la mano dominanre mostrando la palma, se flexionan los dedos anular, meñique y pulgar hacia el interior de la palma, mientras que los dedos índice y medio se extienen separados formando una \'V\'.',
            imageURL: '/Abecedario/V.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'W',
            description: 'Con la mano dominante mostrando la palma, se flexionan los dedos meñique y pulgar hacia el interior de la palma, mientras que los dedos índice, medio y anular se extienden sepradados unos de otros.',
            imageURL: '/Abecedario/W.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'X',
            description: 'Con la mano dominante se flexionan los dedos medio al meñique hacia el interior de la palma, mientras que los dedos índice y pulgar se flexionan un poco sin tocarse formanto una \'C\' y se hace un movimiento hacia uno mismo.',
            imageURL: '/Abecedario/X.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'Y',
            description: 'Con la mano dominante mostrando el dorso, se extienen los dedos meñique y pulgar, mientras que el resto de los dedos se flexionan hacia el interior de la palma.',
            imageURL: '/Abecedario/Y.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'Z',
            description: 'Con la mano dominante utilizando el dedo índice se dibuja la letra \'Z\'.',
            imageURL: '/Abecedario/Z.png',
            class: 'Abecedario',
            grade: Grades.a1
        },
        {
            name:'1',
            description: 'Con la mano dominante mostrando el dorso se hace un puño donde el dedo índice es extendido.',
            imageURL: '/Numeros/1.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'2',
            description: 'Con la mano dominante mostrando el dorso se hace un puño donde el dedo índice y medio son extendidos sin tocarse.',
            imageURL: '/Numeros/2.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'3',
            description: 'Con la mano dominante mostrando el dorso se hace un puño donde el dedo índice, medio y anular son extendidos sin tocarse.',
            imageURL: '/Numeros/3.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'4',
            description: 'Con la mano dominante mostrando el dorso, los dedos del índice hasta el meñique son estendidos sin tocarse mientras que el pulgar se flexiona hacia el interior de la palma.',
            imageURL: '/Numeros/4.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'5',
            description: 'Con la mano dominante mostrando el dorso, los dedos de la mano son extendidos sin tocarse.',
            imageURL: '/Numeros/5.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'6',
            description: 'Con la mano dominante mostrando el dorso y de manera horizontal, se flexionan los dedos del índice al meñique hacia la palma de la mano mientras que el pulgar se extiende.',
            imageURL: '/Numeros/6.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'7',
            description: 'Con la mano dominante mostrando el dorso y de manera horizontal, se flexionan los dedos del medio al meñique hacia la palma de la mano mientras que los dedos índice y pulgar se extienden sin tocarse',
            imageURL: '/Numeros/7.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'8',
            description: 'Con la mano dominante mostrando el dorso y de manera horizontal, se flexionan los dedos anular y meñique hacia la palma de la mano mientras que los dedos índice, medio y pulgar se extienen sin tocarse.',
            imageURL: '/Numeros/8.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'9',
            description: 'Con la mano dominante mostrando el dorsoy con el pulgar flexionado hacia la palma, se hace un movimiento donde los dedos del índice al meñique se flexionan hacia la palma.',
            imageURL: '/Numeros/9.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'10',
            description: 'Con la mano dominante, se extienen los dedos sin tocarse con la palma hacia arriba y se hace un movimiento donde la palma de la mano se mueve hacia abajo.',
            imageURL: '/Numeros/10.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'11',
            description: 'Con la mano dominante de manera horizontal se flexionan los dedos del índice al meñique hacia el interior de la palma, mientras que el dedo pulgar se extiende y se hace un movimiento con la muñeca de arriba hacia abajo.',
            imageURL: '/Numeros/11.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'12',
            description: 'Con la mano dominante de manera horizontal se flexionan los dedos del medio al meñique hacia el interior de la palma, mientras que los dedos índice y pulgar se extienden sin tocarse y se hace un movimiento con la muñeca de arriba hacia abajo.',
            imageURL: '/Numeros/12.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'13',
            description: 'Con la mano dominante de manera horizontal se flexionan los dedos anular y meñique hacia el interior de la palma, mientras que los dedos índice, medio y pulgar se extienden sin tocarse y se hace un movimiento con la muñeca de arriba hacia abajo.',
            imageURL: '/Numeros/13.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'14',
            description: 'Con la mano dominante de manera horizontal se flexiona el pulgar hacia el intrior de la palma, mientras que los dedos del índice al meñique se extienden sin tocarse y se hace un movimiento con la muñeca de arriba hacia abajo.',
            imageURL: '/Numeros/14.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'15',
            description: 'Con ambas manos mostrando el dorso de manera horizontal, se extienden los dedos sin tocarse y se alternan los movimientos de subir y bajar las manos.',
            imageURL: '/Numeros/15.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'16',
            description: 'Con la mano dominante se flexionan los dedos del índice al meñique y se extiende el dedo pulgar separado, se mueve la mano hacia el frente.',
            imageURL: '/Numeros/16.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'17',
            description: 'Con la mano dominante se flexionan los dedos del medio al meñique y se extienden los dedos índice y pulgar sin tocarse, se mueve la mano hacia el frente.',
            imageURL: '/Numeros/17.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'18',
            description: 'Con la mano dominante se flexionan los dedos anular y meñique y se extienden los dedos índice, medio y pulgar sin tocarse, se hace un movimiento con la mano hacia el frente.',
            imageURL: '/Numeros/18.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'19',
            description: 'Con la mano dominante se flexiona el pulgar hacia la palma y se extienden los dedos del índice al meíque sin tocarse, mientras se hace un movimiento con la mano hacia el frente.',
            imageURL: '/Numeros/19.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'20',
            description: 'Con la mano dominante mostrando la palma, se flexionan los dedos del medio al meñique hacia la palma, mientras que se hace flexionan levemente los dedos índice y medio tocándose, se hace un movimiento repetido donde el índice y pulgar se separan',
            imageURL: '/Numeros/20.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'30',
            description: 'Con la mano dominante mostrando la palma, se flecionan los dedos anular y medio hacia la malma, el dedo índice se extiende y se flexionan levemente los dedos medio y pulgar tocándose, se hace un movimiento repetido donde el dedo medio y pulgar se separan.',
            imageURL: '/Numeros/30.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'40',
            description: 'Con la mano dominante se extienden los dedos del medio al meñique juntos mientras que se hace un movimiento donde el dedo índice y pulgar se tocan.',
            imageURL: '/Numeros/40.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'50',
            description: 'Con la mano dominante, mostrando la palma de la mano y con los dedos extendidos y separados se hace un movimiento de ondulación con los dedos.',
            imageURL: '/Numeros/50.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'60',
            description: 'Con la mano dominante, mostrando la palma se cierra la mano en forma de puño y se hace un gesto repetido donde se abre un poco la mano y se vuelve a cerrar formando el puño.',
            imageURL: '/Numeros/60.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'70',
            description: 'Con la mano dominante, mostrando la palma los dedos del medio al meñique se flexionan hacia la palma, mientras que los dedos índice y pulgar se extienden haciendo un gesto donde se separan y se vuelven a unir',
            imageURL: '/Numeros/70.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'80',
            description: 'Con la mano dominante, mostrando la palma los dedos aunlar y meñique se flexionan hacia la palma, mientras que los dedos índice, medio y pulgar se extienden haciendo un gesto donde se separan y se vuelven a unir',
            imageURL: '/Numeros/80.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'90',
            description: 'Con la mano dominante, mostrando la palma, se extienden los dedos hacia el frente haciendo que los dedos del índice añ meñique toquen con el pulgar, se hace un movimiento donde se separan y vuelven a tocar el pulgar',
            imageURL: '/Numeros/90.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'100',
            description: 'Con la mano dominante, mostrando el dorso se flexionan los dedos del medio al meñique y el pulgar hacia la palma, mientras que con el dedo índice se hacen movimientos donde se flexiona hacia la palma.',
            imageURL: '/Numeros/100.png',
            class: 'Numeros',
            grade: Grades.a1
        },
        {
            name:'AZUL',
            description: 'Con la mano base con la palma hacia arriba y con los dedos extendidos se coloca la mano dominante con los dedos del índice al meñique flexionados hacia la palma y con el pulgar extendido, se hace un movimiento de atrás hacia delante con la mano dominante sobre la mano base.',
            imageURL: '/Colores/AZUL.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'AMARILLO',
            description: 'Con la mano base formando un puño y con el dorso hacia arriba, se coloca encima la mano dominante con la palma hacia arriba y los dedos del índice al meñique flexionados hacia la palma y el dedo pulgar extendido, se hace un movimiento de atrás hacia delante con la mano dominante sobre la mano base.',
            imageURL: '/Colores/AMARILLO.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'BLANCO',
            description: 'Con la mano base con la palma hacia arriba se coloca la mano base con la palma hacia arriba con los dedos índice al meñique extendidos y juntos y con el pulgar flexionado hacia la palma, se hace un movimiento de atrás hacia adelante con la mano dominante sobre la mano base.',
            imageURL: '/Colores/BLANCO.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'CAFE',
            description: 'Con la mano base de manera horizontal se hace un puño, mientras que con la mano dominante se flexionan un poco los dedos formando una \'C\' y se hacen movimientos circulares sobre la mano base.',
            imageURL: '/Colores/CAFE.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'GRIS',
            description: 'Con la mano base con la palma hacia arriba y los dedos extendidos se coloca el costado de la mano dominante don los dedos del medio al meñique flexionados hacia la palma y con los dedos índice y pulgar extendidos sin tocarse, se hace un movimiento de atrás hacia adelante con la mano dominante sobre la mano base.',
            imageURL: '/Colores/GRIS.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'MORADO',
            description: 'Con la mano base de manera horizontal se extienen juntos los dedos del índice al meñique mientras que el pulgar se flexiona hacia la palma, la mano dominante se coloca sobre la mano base en forma vertical con los dedos meñique y pulgar flexionados hacia la palma y los dedos del índice al anular estendidos y juntos se colocan sobre la mano base y se hace un movimiento de atrás hacia adelante.',
            imageURL: '/Colores/MORADO.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'NEGRO',
            description: 'Con la mano base extendida hacia el frente y con la palma hacia arriba se extienden los dedos y se coloca sobre ella la mano dominante que tiene los dedos anular, meñique y pulgar flexionados hacia la palma y los dedos índice y medio están extendidos y juntos, se hace un movimiento hacia atras y hacia adelante con la mano dominante sobre la mano base.',
            imageURL: '/Colores/NEGRO.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'ORO',
            description: 'Con la mano base con la palma hacia arriba se extienden los dedos y sobre ella se coloca la mano dominante con los dedos ligeramente flexionados formando una \'O\' y se hace un movimiento de arriba hacia abajo sobre la mano base.',
            imageURL: '/Colores/ORO.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'PLATA',
            description: 'Con la mano base con la palma hacia arriba se extienen los dedos y sobre ella se coloca la mano dominanrte con los dedos anular y meñique flecionados hacia la palma, los dedos índice y medio extendidos formando una \'L\', se hace un movimiento con la mano dominante de arriba hacia abajo sobre la mano base.',
            imageURL: '/Colores/PLATA.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'ROJO',
            description: 'Con la mano dominante mostrando el dorso se flexionan los dedos anular, meñique y pulgar hacia la palma, mientras que los dedos índice y medio extendidos se entrelazan, y se hace un movimiento de arriba hacia abajo sobre la barbilla.',
            imageURL: '/Colores/ROJO.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'ROSA',
            description: 'Con la mano base con la palma hacia arriba se extienden los dedos y se coloca encima la mano dominante, con los dedos anular, meñique y pulgar flexionados hacia la palma y los dedos índice y medio extendidos y entrelazados, se hace un movimiento de atrás hacia adelante sobre la mano base.',
            imageURL: '/Colores/ROSA.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'VERDE',
            description: 'Con la mano base con la palma hacia arriba se extienden los dedos y se coloca sobre ella la mano dominante con los dedos anular, meñique y pulgar flecionados hacia la palma, los dedos índice y medio se extienden sin tocarse, se hace un movimiento de atrás hacia adelante sobre la mano base.',
            imageURL: '/Colores/VERDE.png',
            class: 'Colores',
            grade: Grades.a1
        },
        {
            name:'ENERO',
            description: 'Con la mano dominante y con la palma hacia el frente se flexionan los dedos sin cubrir la palma de la mano, se hace un movimiento de izquierda a derecha con la muñeca.',
            imageURL: '/Fechas/ENERO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'FEBRERO',
            description: 'Con la mano dominante y con la palma hacia el frente se extienden juntos los dedos del medio al meñique, el pulgar se coloca bajo el dedo índice y éste se flexiona un poco, se hace un movimiento de izquierda a derecha con la muñeca.',
            imageURL: '/Fechas/FEBRERO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'MARZO',
            description: 'Con la mano dominante, se flexionan los dedos meñique y pulgar hacia la palma mientras que los dedos del índice al anular se extienden juntos, se hace un movimiento circular alrededor de la oreja.',
            imageURL: '/Fechas/MARZO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'ABRIL',
            description: 'Con la mano dominante, se flexionan los dedos del índice al meñique hacia la palma, se hace un movimiento circular alrededor de la oreja con la mano dominante.',
            imageURL: '/Fechas/MARZO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'MAYO',
            description: 'Con la mano dominante y con la palma hacia el frente se flexionan los dedos meñique y pulgar hacia la palma mienntras que los dedos del índice al anular se extienden juntos, se hace un movimiento con la muñeca de izquierda a derecha.',
            imageURL: '/Fechas/MAYO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'JUNIO',
            description: 'Con la mano dominante y con la palma hacia el frente se flexionan los dedos del índice al anular y el pulgar hacia la palma de la mano, se deja extendido el dedo meñique, se hace un movimiento de izquierda a derecha con la muñeca.',
            imageURL: '/Fechas/JUNIO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'JULIO',
            description: 'Con la mano dominante y con la palma hacia el frente se flexionan los dedos medio y anular, los dedos índice, meñique y pulgar se dejan extendidos, se hace un movimiento de izquierda a derecha con la muñeca.',
            imageURL: '/Fechas/JULIO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'AGOSTO',
            description: 'Con la mano dominante se flexionan los dedos del índice al meñique hacia la palma y el pulgar se coloca en el costado de la mano, se gira la muñeca de izquierda a derecha.',
            imageURL: '/Fechas/AGOSTO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'SEPTIEMBRE',
            description: 'Con la mano dominante se flexionan los dedos formando un puño cerrado, se gira la muñeca de izquierda a derecha.',
            imageURL: '/Fechas/SEPTIEMBRE.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'OCTUBRE',
            description: 'Con la mano dominante con la palma hacia el frente, se flexionan ligeramente los dedos del índice al meñique y te tocan con el pulgar formando una \'O\', se gira la muñeca de izquierda a derecha.',
            imageURL: '/Fechas/OCTUBRE.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'NOVIEMBRE',
            description: 'Con la mano dominante y con la palma hacia el frente se flexionan los dedos anular, meñique y pulgar, los dedos índice y medio se extienden juntos, con la muñeca se hace un movimiento de izquierda a derecha.',
            imageURL: '/Fechas/NOVIEMBRE.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'DICIEMBRE',
            description: 'Con la mano dominante y con la palma hacia el frente, se flxionan ligeramente los dedos del medio al meñique tocando el pulgar, el dedo índice se extiende, con la muñeca se hace un movimiento de izquierda a derecha.',
            imageURL: '/Fechas/DICIEMBRE.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'LUNES',
            description: 'Con la mano dominante y con la palma hacia el frente, se flexionan los dedos del medio al meñique, los dedos índice y pulgar se extienden sin tocarse formando una \'L\', se hace un movimiento circular en sentido contrario a las manecillas del reloj',
            imageURL: '/Fechas/LUNES.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'MARTES',
            description: 'Con la mano dominante y con la palma hacia el frente, se flexionan los dedos anular y meñique, los dedos índice, medio y pulgar se extienden, los dedos índice y medio se quedan juntos, se hace un movimiento circular en sentido contrario a las manecillas del reloj.',
            imageURL: '/Fechas/MARTES.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'MIERCOLES',
            description: 'Con la mano dominante y con la palma hacia el frente, se flexionan los dedos meñique y pulgar, los dedos del índice al anular se extienden juntos, se hace un movimiento circular en sentido contrario a las manecillas del reloj.',
            imageURL: '/Fechas/MIERCOLES.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'JUEVES',
            description: 'Con la mano dominante y con la palma hacia el frente, se flexionan los dedos formando un puño, el dedo meñique se deja estendido, se hace un movimiento circular en sentido contrario a las manecillas del reloj.',
            imageURL: '/Fechas/JUEVES.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'VIERNES',
            description: 'Con la mano dominante y con la palma hacia el frente, se flexionan los dedos anular, meñique y pulgar, los dedos índice y medio se extienden separados, se hace un movimiento circular en sentido contrario a las manecillas del reloj.',
            imageURL: '/Fechas/VIERNES.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'SABADO',
            description: 'Con la mano dominante y con la palma hacia el frente, se flexionan los dedos formando un puño cerrado, se hace un movimiento circular en sentido contrario a las manecillas del reloj.',
            imageURL: '/Fechas/SABADO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'DOMINGO',
            description: 'Con la mano dominante y con la palma hacia el frente, se flexionan ligeramente los dedos del medio al meñique tocando el pulgar, el dedo índice se extiende, se hace un movimiento circular en sentido contrario a las manecillas del reloj.',
            imageURL: '/Fechas/DOMINGO.png',
            class: 'Fechas',
            grade: Grades.a2
        },
        {
            name:'CEREZA',
            description: 'Con la mano dominante con los dedos ligeramente flexionados del índice al meñique y tocando el pulgar, se hace un movimiento hacia el rostro, donde se extiende el dedo índice y una vez llegado a la barbilla se hace un movimiento repetido de arriba hacia abajo.',
            imageURL: '/Frutas-Verduras/CEREZA.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
        {
            name:'DURAZNO',
            description: 'Se coloca la mano base con el dorso hacia arriba y con la mano cerrada formando un puño, se coloca la mano dominante con los dedos flexionados ligeramente del índice al meñique tocando el pulgar, se hace un movimiento donde la mano dominante recorre la mano base desde el antebrazo hasta la mano.',
            imageURL: '/Frutas-Verduras/DURAZNO.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
        {
            name:'FRESA',
            description: 'Con la mano dominante con los dedos del medio al meñique extendidos, el dedo índice ligeramente flexionado tocando el pulgar, se toca la cara en repetidas ocasiones en la zona debajo del ojo derecho recorriendo hacia la nariz y terminando bajo el ojo izquierdo.',
            imageURL: '/Frutas-Verduras/FRESA.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
        {
            name:'MANGO',
            description: 'Con la mano dominante mostrando el dorso, se flexionan ligeramente los dedos sin tocar el pulgar, se hace un movimiento repetido en la zona de la cara recorriendo desde la frente hasta la punta de la nariz.',
            imageURL: '/Frutas-Verduras/MANGO.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
        {
            name:'MANZANA',
            description: 'Con la mano dominante se flexionan los dedos meñique y pulgar, los dedos del índice al anular se extienden juntos, se hace un movimiento circular la zona de la mejilla.',
            imageURL: '/Frutas-Verduras/MANZANA.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
        {
            name:'NARANJA',
            description: 'Con la mano dominante cerca de la cara a la altura de los ojos, se hace un movimiento donde se flexionan los dedos hacia el interior formando un puño.',
            imageURL: '/Frutas-Verduras/NARANJA.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
        {
            name:'PIÑA',
            description: 'Con ambas manos se flexiona el pulgar hacia el interior de la palma y el resto de los dedos se dejan extendidos de manera separada, una mano se muestra el dorso y la otra mano muestra la palma, con ambas manos se alternan movimientos de izquierda a derecha.',
            imageURL: '/Frutas-Verduras/PIÑA.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
        {
            name:'PLATANO',
            description: 'Con la mano base se simula sujetar un objeto, mientras que con la mano dominante se hace un movimiento simulando retirar la cáscara de un plátano.',
            imageURL: '/Frutas-Verduras/PLATANO.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
        {
            name:'UVA',
            description: 'Con la mano dominante y con los dedos del índice al meñique extendidos y juntos, se toca la frente.',
            imageURL: '/Frutas-Verduras/UVA.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
        {
            name:'ZANAHORIA',
            description: 'Con la mano base simulando tomar un objeto se coloca frente a la boca abierta.',
            imageURL: '/Frutas-Verduras/ZANAHORIA.png',
            class: 'Frutas-Verduras',
            grade: Grades.a2
        },
    ]
}