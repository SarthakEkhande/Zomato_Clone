import React from 'react';
import Header from './Header';

const Contact = () => {
  return (
    <div>
    <Header/>
    <div className='flex items-center flex-col gap-4'>
    <h1 style={{ textAlign: 'center' }}>Hi 👋, I'm Sarthak Ekhande</h1>
      <h3 style={{ textAlign: 'center' }}>A passionate frontend developer from Pune</h3>
      <img
        style={{  float: 'right', width: '400px' }}
        src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjjpdcdbzm1t21xat9w6c.gif"
        alt="profile"
      />

      <p style={{ textAlign: 'center' }}> 
        <img src="https://komarev.com/ghpvc/?username=sarthakekhande&label=Profile%20views&color=0e75b6&style=flat" alt="profile-views" /> 
      </p>

      <p style={{ textAlign: 'center' }}> 
        <a href="https://twitter.com/ekhandesarthak" target="_blank" rel="noopener noreferrer">
          <img src="https://img.shields.io/twitter/follow/ekhandesarthak?logo=twitter&style=for-the-badge" alt="Twitter" />
        </a> 
      </p>

      <ul>
        <li>🔭 I’m currently working on <a href="https://you-tube-clone-phi-peach.vercel.app/" target="_blank" rel="noopener noreferrer">Youtube Clone</a></li>
        <li>🌱 I’m currently learning NextJS</li>
        <li>💬 Ask me about React, Redux, Frontend Development</li>
        <li>📫 How to reach me <a href="mailto:sarthakekhande2017@gmail.com">sarthakekhande2017@gmail.com</a></li>
        <li>📄 Know about my experiences <a href="https://drive.google.com/file/d/1_X1YO6iNFiiC3bjchwtoY1l3NFk6nCWY/view?usp=sharing" target="_blank" rel="noopener noreferrer">here</a></li>
        <li>⚡ Fun fact: I am funny</li>
      </ul>

      <h3>Languages and Tools:</h3>
      <p>
        <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/>
        {/* Add other language and tool icons similarly */}
      </p>

      <p>
        <img src="https://github-readme-stats.vercel.app/api/top-langs?username=sarthakekhande&show_icons=true&locale=en&layout=compact" alt="top-languages" />
      </p>

      <p>
        <img src="https://github-readme-stats.vercel.app/api?username=sarthakekhande&show_icons=true&locale=en" alt="github-stats" />
      </p>

      <p>
        <img src="https://github-readme-streak-stats.herokuapp.com/?user=sarthakekhande" alt="github-streak" />
      </p>
    </div>
    
    </div>
  );
}

export default Contact;
