import 'virtual:windi.css'
import './style.css'
import {cheerio} from 'cheerio'
import jquery from 'jquery';
import axios from 'axios';


jquery('#submit').on('click', async function(){
  // check if url field is empty
  const url = jquery('#url-input').val();
  // check if url field is a valid url (with regexp)
  const html = await axios.get('./api', {
    params: {
      userSubmittedUrl: url
    }
  })
  // check if response is html

  // const $ = cheerio.load(html)
  

  console.log(url);
})

