const CARD_DETAILS = {
    name: "Admiral Ackbar",
    number: "4024007107304395",
    exp: new Date("January 1, 2025"),
    cvv: "109"
  }
  const MASKED_CHAR = "•"
  
  function separateFourDigits(num) {
    return num.replace(/(\d{4})/g, '$1 ').trim();
  }

  async function copyToClipboard() {
    console.log("hi");

    // try {
    //   await navigator.clipboard.writeText(numberRef.current.value);
    // } catch (err) {
    //   console.error('Failed to copy: ', err);
    // }
  }
  
  // CodeSignal doesn't allow module importing from React
  // Use the React API by calling React.useState, React.useEffect, etc.
  const VirtualCreditCard = () => {
    return (
      <div className="container">
        <div className="card">
          <div className="details">
            <img
              className="hrt-logo" 
              src="http://bit.ly/3AbqruK"
            />
            <div className="name-number">
              <div className="title">
                {CARD_DETAILS.name}
              </div>
              <div className="number" onClick="copyToClipboard">
                {separateFourDigits(CARD_DETAILS.number)}
              </div>
            </div>
            <div className="expiration">
              <div className="title">
                Expires
              </div>
              <div className="number">
                {"0" + (CARD_DETAILS.exp.getMonth() + 1).toString() + "/" + (CARD_DETAILS.exp.getFullYear().toString()).substr(2)}
              </div>
            </div>
            <div className="cvv">
              <div className="title">
                CVV
              </div>
              <div className="number">
                {CARD_DETAILS.cvv}
              </div>
            </div>
            <img
              className="visa-logo" 
              src="http://bit.ly/3GcIqVf"
            />
          </div>
        </div>
        <button className="lock-button">Lock</button>
      </div>
    )
  }
  
  ReactDOM.render(
    <VirtualCreditCard />,
    document.getElementById('app')
  );