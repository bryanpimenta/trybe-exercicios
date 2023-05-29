const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];
  
const filterPeople = () => {
    let seculo20 = [];
    people.map((item) => {
       if (item.bornIn >= 2000 && item.nationality ==='Australian') {
        return seculo20.push(item.name);
    }});
    return seculo20;
};

console.log(filterPeople());
