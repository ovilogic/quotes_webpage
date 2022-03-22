let file = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
async function getText(f) {
  let myObject = await fetch(f);
  let myJ = await myObject.json();

   const quotesMomma = Object.keys(myJ);
   console.log(quotesMomma, 'this is authors ')
   const arrMomma = myJ[quotesMomma[0]]
    const index = Math.floor(Math.random() * arrMomma.length);
    const newQuoteObj = arrMomma[index]

    const newQuote = [newQuoteObj['quote'], newQuoteObj['author']]
    postMessage(newQuote);

  }
  getText(file)


// Previous try. Simple page, with 3 quotes and no API call:

  /*
const quotes = {
    'Elon Musk': 'F*ck that! We\'re gonna get it done!',
    'Winston Churchill': 'Success is not final; failure is not fatal: it is the courage to continue that counts.',
    'Thomas Hobbes': 'Hell is truth seen too late.'
    }



    function changeQuote() {


        let newQuote = [authors[index], quotes[authors[index]]];
        postMessage(newQuote);
    }

    changeQuote()
    */
