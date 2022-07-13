function getBotResponse(input) {
  return fetch("https://lancola-chatbot.herokuapp.com/api?user_input=" + input)
    .then((response) => response.json())
    .then((data) => {
      return data.response;
    });

  // const realPrice = () => {
  //   coinprice.then((a) => {
  //     console.log(a);
  //   });
  // };

  // realPrice();
}
