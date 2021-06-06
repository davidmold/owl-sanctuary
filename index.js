const sanctuary = {
  owls: []
}

const motherOwl = {
  produceEgg: () => {
    return {
      egg: {
        babyOwl: {
          name: 'Owlet'
        }
      }
    }
  }
}

console.log('We have got an', motherOwl.produceEgg().egg.babyOwl.name)