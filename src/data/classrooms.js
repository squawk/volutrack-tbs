const groups = [
  'OTHER', 'PRESCHOOL', 'KINDERGARTEN',
  'FIRST', 'SECOND', 'THIRD',
  'FOURTH', 'FIFTH', 'SIXTH'
]
const teachers = [
  [
    'Dibbles',
    'I Can Read',
    'JSD Employee',
    'Other',
  ],
  [
    'Bettina Espinosa',
    'Holly Hyte',
    'Lora McFarland',
    'Lacie North',
  ],
  [
    'Noelle Rizer',
    'LeeAnn Scott',
    'Staci White',
  ],
  [
    'Ericka Gowans',
    'Morgan Kochevar',
    'Kasey La Fleur',
    'Tina Price',
  ],
  [
    'Jana Conche/Nicole Williams',
    'Kathie Jorgensen',
    'Susan Warnock',
    'Katie Sebrands',
  ],
  [
    'Laurie Benson',
    'Susan Stokes',
    'Allyson Vietti ',
  ],
  [
    'Angelique Boyles ',
    'Janet Crane',
    'Traci Rindlisbach',
    'Jessica Soffe',
  ],
  [
    'Rebecca Barnhurst',
    'Margaret Coupe',
    'Machelle Rogers',
  ],
  [
    'Kristine Kimball',
    'Kim Vance',
    'Linda White',
  ],
];

let classrooms = [];

groups.forEach((group, index) => {
  classrooms.push({
    label: group,
    value: group,
    disabled: true
  });
  teachers[index].forEach((teacher) => {
    classrooms.push({
      label: teacher,
      value: teacher,
    });
  });
});

export default classrooms;
