let inicialState = {
 friendsItems: [
  {id: 1, name: "Каролина", img: "https://sun9-63.userapi.com/c854016/v854016151/10d54/7znl7uGtnzY.jpg?ava=1"},
  {id: 2, name: "Ольгерд", img: "https://sun9-51.userapi.com/c840320/v840320264/57c00/W84Ks-jyj-0.jpg?ava=1"},
  {id: 3, name: "Евгений", img: "https://sun9-9.userapi.com/c204520/v204520295/1ec95/E5fIuT8ivv8.jpg?ava=1"},
  {id: 4, name: "Гелатьт", img: "https://sun2.dataix-by-minsk.userapi.com/c857132/v857132943/1b76e/LlysqbH3dxQ.jpg?ava=1"} 
 ],
}

let asideReducer = (state = inicialState, action) => {
 return state;
}

export default asideReducer;