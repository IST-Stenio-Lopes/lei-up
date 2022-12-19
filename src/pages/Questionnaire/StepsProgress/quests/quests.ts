
interface Iquestion{
    id: string,
    question: string
}


type Istages = Iquestion[]; //serão os stages que movimentará o componente

type Icontract = Istages[];


const societyStageOne: Istages = [
    {id: '01', question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed?'},
    {id: '02', question: 'Donec ullamcorper sollicitudin malesuada. Pellentesque sit?'},
    {id: '03', question: 'Nam lacinia sapien sit amet vestibulum?'},
]

const societyStageTwo: Istages = [
    {id: '11', question: 'Sed sem velit, tincidunt at libero?'},
    {id: '12', question: 'Nulla sit amet massa pellentesque, gravida ligula ac.'},
    {id: '13', question: 'velit sed ullamcorper morbi tincidunt ornare massa?'},
    {id: '14', question: 'at ultrices mi tempus imperdiet nulla malesuada?'},
]

const societyStageThree: Istages = [
    {id: '21', question: 'tellus orci ac auctor augue mauris augue?'},
    {id: '22', question: 'nulla facilisi nullam vehicula ipsum a arcu?'},
]

const societyStageFour: Istages = [
    {id: '31', question: 'sodales ut eu sem integer vitae justo'},
    {id: '32', question: 'magnis dis parturient montes nascetur ridiculus mus mauris vitae?'},
    {id: '33', question: 'viverra tellus in hac habitasse platea dictumst vestibulum rhoncus'},
]

const societyStageFive: Istages = [
    {id: '31', question: 'venenatis a condimentum vitae sapien'},
    {id: '32', question: 'aliquet enim tortor at auctor?'},
    {id: '33', question: 'urna condimentum mattis pellentesque id nibh tortor id aliquet lectus'},
]

const societyContract: Icontract = [societyStageOne, societyStageTwo, societyStageThree, societyStageFour, societyStageFive];

export { societyContract }