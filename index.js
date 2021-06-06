const sanctuary = {
  owls: []
}

const motherOwl = {
  produceEgg: () => {
    return {
      babyOwl: {
        name: 'Owlet'
      },
      hatch() {
        return this.babyOwl
      }
    }
  }
}

console.log('We have got an', motherOwl.produceEgg().babyOwl.name)
let egg = motherOwl.produceEgg()
let owlet = egg.hatch()
console.log('hatched', owlet.name)