const sanctuary = {
  owls: []
}

const motherOwl = {
  layEgg() {
    return {
      babyOwl: {
        name: 'Owlet',
        rename(newName) {
          this.name = newName
        }
      },
      hatch() {
        return this.babyOwl
      }
    }
  }
}

console.log('We have got an', motherOwl.layEgg().babyOwl.name)
let egg = motherOwl.layEgg()
let owlet = egg.hatch()
owlet.rename('Pedro')
console.log('owl is', owlet.name)
egg = motherOwl.layEgg()
console.log('new egg is called', egg.babyOwl.name)