
import AboutImage from "../../assets/65ae4a7cfeebb66f6d2371b6_pexels-gustavo-fring-7156156.webp"
import DonateImage from "../../assets/65af8beb6604134c82177827_pexels-julia-m-cameron-6994985.webp"
import image1 from "../../assets/65af8a95c570e47bd1123b4e_033-hospital.svg"
import image2 from "../../assets/65af8a958d27ad8d830434f4_022-family-1.svg"
import image3 from "../../assets/65af8a95c570e47bd1123b4e_033-hospital.svg"
import image4 from "../../assets/65af8a95c570e47bd1123b4e_033-hospital.svg"

//  images section three
import imageJoin1  from "../../assets/65c21dabe9f70936f88e3804_pexels-pixabay.webp"
import imageJoin2 from "../../assets/65af9768455c725f3011c611_pexels-анастасия-триббиани-9455855.webp"
import imageJoin3 from "../../assets/65af9768dd5babf10d04c99f_hans-isaacson-_EhhGb2wRgE-unsplash.webp"
import imageJoin4 from "../../assets/65c21dab9343ae771808745c_pexels-arvind-shakya.webp"

import gif from "../../assets/65af9c65ebb8c63f5dd22981_gift 1.svg"
 import  imgCard1 from "../../assets/65afe678b01424a5f923f1a0_pexels-julia-m-cameron-6995244.jpg"
 import  imgCard2 from "../../assets/65bb7ae313e8596e25192224_pexels-rdne-stock-project-6647116.jpg"
 import  imgCard3 from "../../assets/65bb54fbfbc298adf270e2f8_pexels-julia-m-cameron-6995092.jpg"
 
 import secImage1 from "../../assets/65c217b91cf1396c0c03eec2_pexels-rdne-stock.webp"
import "./AboutSection.css"
const AboutSection = () => {
   
    return (
<>


{/* //  start Abou Section */}
      <section className=" grid grid-cols-1 lg:grid-cols-2  px-[20px]  md:px-[120px] py-[80px]    gap-8  xl:gap-12 p-8 ">
  
      <div className=" ">
          <img   src={AboutImage} alt="Donations" className="rounded-xl h-[100%] w-[100%]" />
      </div>
  
      <div className=" text-paragraph  flex items-center   ">
    <div className=" ">
    <h2 className=" text-xl md:text-3xl font-bold mb-6 text-primary   ">
              At Charity 128, we prioritize <br/> transparency, and inclusivity.
          </h2>
          <p className=" text-sm md:text-md mb-8  text-paragraph font-medium">
              Charity 128 is a dynamic and forward-thinking charity donation organization committed to making a positive impact on communities around the world. Our mission is rooted in the belief that compassion has the power to transform lives, and we strive to create a world where everyone has access to the support they need to thrive.
          </p>
          <button className="px-6 py-2  border-2 border-solid border-primary text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition duration-300">
              About Us
          </button>
    </div>
      </div>
  </section>
{/* =============================================================== */}
  
      <section className="  px-[20px]  md:px-[120px]  py-[50px]  ">

<div className="big-div bg-primary  md:p-[50px] p-[20px] ">


<div className=" grid grid-cols-1 lg:grid-cols-2 gap-2 mb-[20px] ">
<div className="  mdd:mb-[30px]">
<h2 className="text-xl md:text-4xl font-bold mb-6 text-white">The mission of our  organization</h2> 

</div>
<div className="">
<p className=" text-sm  md:text-md mb-6 text-white xl:w-[500px]">
     At Charity, we prioritize transparency, integrity, and inclusivity. These values  guide
     our actions as we work tirelessly to bridge the gap between those in need and those
     willing to help.
   </p>
</div>

</div>              

       <div  className="  lg:gap-8   grid grid-cols-12  ">
       <div className="col-span-12 lg:col-span-6 xl:col-span-5   text-white">
    

          {/* قائمة الأهداف */}
          <div className="space-y-4">


<div className=" p-4 w-[100%] bg-[#2e5058] rounded-lg text-white">
  <div className="flex  items-center text-2xl  mr-4">
   
     <img src={image1}/>
    <h3 className="text-lg font-semibold ml-4 text-white">Education for All</h3>

  </div>
  <div>
    <p className="text-sm text-gray-300 mt-2">
      Charity is dedicated to ensuring that every child has access to quality education.
    </p>
  </div>
</div>


<div className=" p-4 w-[100%] bg-[#2e5058] rounded-lg text-white">
  <div className="flex  items-center text-2xl  mr-4">
  
     <img src={image2}/>
    <h3 className="text-lg font-semibold ml-4 text-white">Education for All</h3>

  </div>
  <div>
    <p className="text-sm text-gray-300 mt-2">
      Charity is dedicated to ensuring that every child has access to quality education.
    </p>
  </div>
</div>


<div className=" p-4 w-[100%] bg-[#2e5058] rounded-lg text-white">
  <div className="flex  items-center text-2xl  mr-4">
  
     <img src={image3}/>
    <h3 className="text-lg font-semibold ml-4 text-white">Education for All</h3>

  </div>
  <div>
    <p className="text-sm text-gray-300 mt-2">
      Charity is dedicated to ensuring that every child has access to quality education.
    </p>
  </div>
</div>


<div className=" p-4 w-[100%] bg-[#2e5058] rounded-lg text-white">
  <div className="flex  items-center text-2xl  mr-4">

     <img src={image4}/>
    <h3 className="text-lg font-semibold ml-4 text-white">Education for All</h3>

  </div>
  <div>
    <p className="text-sm text-gray-300 mt-2">
      Charity is dedicated to ensuring that every child has access to quality education.
    </p>
  </div>
</div>
      


        


    


          </div>
        </div>

        {/* الجزء الخاص بالصورة */}
        <div className="  mt-[20px] lg:mt-0    col-span-12 lg:col-span-6 xl:col-span-7 ">
            <img   src={DonateImage} alt="Donations" className="rounded-xl h-[100%] " />
        </div>


       </div>
      


</div>
      </section>
    

  {/* End About Section */}
  

{/*  Three Section */}

<section className=" py-[50px]  ">

<div className="px-[20px]  md:px-[120px]   ">
<div className="grid   grid-cols-12   xl:h-[500px]">

<div className="   grid grid-cols-12  gap-2 xl:gap-0 col-span-12 lg:col-span-3 ">

  <img className=" col-span-6 rounded-lg" src={imageJoin1} alt="photo" width={"100%"} height={"100%"}/>


<img className=" col-span-6  lg:mt-[300px]  xl:mt-[300px]  xl:h-[130px] rounded-lg  " src={imageJoin4} alt="photojoin" height={"100px"}  width={"100%"} />


</div>

<div className="flex flex-col  lg:col-span-6   col-span-12  items-center p-8 bg-white space-y-8 ">
  <h2 className="text-2xl xl:text-3xl font-semibold  text-center text-primary ">
    Join us in the journey to empower communities and transform lives.
  </h2>
  <p className="text-6xl xl:text-[120px] font-semibold text-primary">
    139,364+
  </p>
  <p className="text-paragraph text-sm">
    people already joined
  </p>
  <button className="px-6 py-2 bg-primary text-third text-sm  font-semibold rounded-full hover:bg-teal-800">
    Join Our Organization
  </button>

</div>


<div className="   grid grid-cols-12  gap-2 xl:gap-0 col-span-12 lg:col-span-3 ">

<img className=" col-span-6  lg:mt-[300px]  xl:mt-[200px]  xl:h-[130px] rounded-lg  " src={imageJoin3} alt="photojoin" height={"100px"}  width={"100%"} />

  <img className=" h-[100%] lg:h-auto col-span-6 rounded-lg xl:mt-[50px]" src={imageJoin2} alt="photo" width={"100%"} height={"100%"}/>




</div>

</div>




</div>


{/*  start div scroll */}
<div>


<div className=" py-2 inline-flex w-full flex-nowrap overflow-hidden bg-third ">
  <ul className="brands-wrapper">
  <li className=" w-[250px]  flex items-center space-x-2">
      <img src={gif} />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>
   
    <li className=" w-[250px]   flex items-center space-x-2">
      <img src={gif} />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>
   

    <li className=" w-[250px]   flex items-center space-x-2">
      <img src={gif} />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>
   

    <li className=" w-[250px]   flex items-center space-x-2">
      <img src={gif} />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>
   

    <li className=" w-[250px]   flex items-center space-x-2">
      <img src={gif} />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>
   
  </ul>




  <ul className="brands-wrapper" aria-hidden="true">
    <li className=" w-[250px]   flex items-center space-x-2">
      <img src={gif} />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>

    <li className=" w-[250px]   flex items-center space-x-2">
      <img src={gif}  />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>

    <li className=" w-[250px]   flex items-center space-x-2">
      <img src={gif}  />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>

    <li className=" w-[250px]   flex items-center space-x-2">
      <img src={gif}  />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>

    <li className=" w-[250px]   flex items-center space-x-2">
      <img src={gif}  />                 
      <p className="text-gray-800 font-semibold">Les help each other</p>  
    </li>
   

  </ul>
</div>



</div>




</section>


{/*  start section */}



    <section className="  px-[20px]  md:px-[120px] py-[80px]    text-center">
   
    <div className='text-center mb-16'>


  <h2 className='text-[20px] sm:text-4xl font-semibold text-primaryi mt-5 '>
  Programs and Initiatives

  </h2>
  <p className="text-paragraph xl:w-[400px]   mx-auto mt-5">
  Chari is dedicated to addressing a diverse range of societal challenges, striving to make a positive impact on communities around the world. 
  </p>
</div>
      <div className="grid gap-6 grid-cols-1  md:grid-cols-2  lg:grid-cols-3  ">


     {/* start card */}
    <div className=" bg-white xl:bg-transparent rounded-lg  text-center   ">
      <div className="relative mb-4  h-[250px] ">
        <div className=" hidden  rounded-xl  xl:block     h-[40%] w-[100%] absolute bottom-0 right-0 z-10   bg-third">
        </div>
        <img
         
        src={imgCard1}
        alt="Healthcare Access Initiative"
        className="  xl:absolute xl:top-8  xl:rounded-xl   w-[100%]  h-full  xl:left-[50%] xl:translate-x-[-50%] xl:h-[200px] xl:w-[90%]  z-30"
      />
      </div>
      <div className="text-left p-6">
        <p className="text-sm text-paragraph mb-1">Donation</p>
        <h3 className="text-xl font-semibold text-primary mb-2">Healthcare Access Initiative</h3>
        <p className="text-paragraph mb-4">
          Improve healthcare access in underserved communities, with a focus on preventive care and medical assistance.
        </p>
        <a href="#" className="text-primary hover:text-blue-600 text-sm font-semibold inline-flex items-center">
          Donatinoe now <span className="ml-1">&rarr;</span>
        </a>
      </div>
    </div>

{/*  End Card */}
      
           {/* start card */}
    <div className=" bg-white xl:bg-transparent rounded-lg  text-center   ">
      <div className="relative mb-4  h-[250px] ">
        <div className=" hidden  rounded-xl  xl:block     h-[40%] w-[100%] absolute bottom-0 right-0 z-10   bg-third">
        </div>
        <img
         
        src={imgCard2}
        alt="Healthcare Access Initiative"
        className="  xl:absolute xl:top-8  xl:rounded-xl   w-[100%]  h-full  xl:left-[50%] xl:translate-x-[-50%] xl:h-[200px] xl:w-[90%]  z-30"
      />
      </div>
      <div className="text-left p-6">
        <p className="text-sm text-paragraph mb-1">Donation</p>
        <h3 className="text-xl font-semibold text-primary mb-2">Healthcare Access Initiative</h3>
        <p className="text-paragraph mb-4">
          Improve healthcare access in underserved communities, with a focus on preventive care and medical assistance.
        </p>
        <a href="#" className="text-primary hover:text-blue-600 text-sm font-semibold inline-flex items-center">
          Donatinoe now <span className="ml-1">&rarr;</span>
        </a>
      </div>
    </div>


         {/* start card */}
         <div className=" bg-white xl:bg-transparent rounded-lg  text-center   ">
      <div className="relative mb-4  h-[250px] ">
        <div className=" hidden  rounded-xl  xl:block     h-[40%] w-[100%] absolute bottom-0 right-0 z-10   bg-third">
        </div>
        <img
         
        src={imgCard3}
        alt="Healthcare Access Initiative"
        className="  xl:absolute xl:top-8  xl:rounded-xl   w-[100%]  h-full  xl:left-[50%] xl:translate-x-[-50%] xl:h-[200px] xl:w-[90%]  z-30"
      />
      </div>
      <div className="text-left p-6">
        <p className="text-sm text-paragraph mb-1">Donation</p>
        <h3 className="text-xl font-semibold text-primary mb-2">Healthcare Access Initiative</h3>
        <p className="text-paragraph mb-4">
          Improve healthcare access in underserved communities, with a focus on preventive care and medical assistance.
        </p>
        <a href="#" className="text-primary hover:text-blue-600 text-sm font-semibold inline-flex items-center">
          Donatinoe now <span className="ml-1">&rarr;</span>
        </a>
      </div>
    </div>
      
      
      </div>



      
    </section>




{/* End Section */}

{/*  start section */}

<section className="px-[20px]  md:px-[120px] py-[80px] ">

<div className='text-center mb-16'>


<h2 className='text-[20px] sm:text-4xl font-semibold text-primaryi mt-5 '>
This is the new <br/> generation of events
</h2>
<p className="text-paragraph xl:w-[400px]   mx-auto mt-5">
These events not only provide opportunities for fundraising but also serve as platforms to raise awareness about Chars mission.
</p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    
      <div className="relative overflow-hidden rounded-lg shadow-lg xl:mt-[80px] h-[250px]">
        <img src={secImage1}  alt="Chari Charity Gala" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 h-[80px] w-full bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
          <span className="text-white pl-3 text-lg font-semibold ">Chari Charity Gala</span>
        </div>
      </div>
      

      <div className="relative overflow-hidden rounded-lg shadow-lg  h-[250px]">
        <img src={imageJoin1}  alt="Chari Charity Gala" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 h-[80px] w-full bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
          <span className="text-white pl-3 text-lg font-semibold ">Chari Charity Gala Action</span>
        </div>
      </div>



      <div className="relative overflow-hidden rounded-lg shadow-lg  h-[250px]">
        <img src={imageJoin2}  alt="Chari Charity Gala" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 h-[80px] w-full bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
          <span className="text-white pl-3 text-lg font-semibold ">Chari Charity voulenter</span>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg shadow-lg xl:mt-[80px] h-[250px]">
        <img src={imageJoin3}  alt="Chari Charity Gala" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 h-[80px] w-full bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
          <span className="text-white pl-3 text-lg font-semibold ">Chari Charity Gala Benifit cocert</span>
        </div>
      </div>



      <div className="relative overflow-hidden rounded-lg shadow-lg  xl:mt-[10px] h-[250px]  xl:h-[160px]">
        <img src={imageJoin4}  alt="Chari Charity Gala" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 h-[50px] w-full bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
          <span className="text-white pl-3 text-lg font-semibold ">Chari Charity Gala</span>
        </div>
      </div>


      
      <div className="relative overflow-hidden rounded-lg shadow-lg xl:mt-[-80px]  h-[250px]">
        <img src={secImage1}  alt="Chari Charity Gala" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 h-[80px] w-full bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
          <span className="text-white pl-3 text-lg font-semibold ">Chari Charity Gala</span>
        </div>
      </div>


      
      <div className="relative overflow-hidden rounded-lg shadow-lg xl:mt-[-80px]  h-[250px]">
        <img src={secImage1}  alt="Chari Charity Gala" className="w-full h-full object-cover"/>
        <div className="absolute bottom-0 h-[80px] w-full bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
          <span className="text-white pl-3 text-lg font-semibold ">Chari Charity Gala</span>
        </div>
      </div>

      
      <div className="relative overflow-hidden rounded-lg shadow-lg h-[250px]  xl:h-[160px] xl:mt-[10px]">
        <img src={secImage1}  alt="Chari Charity Gala" className="w-full h-full object-cover"/>
     
        <div className="absolute bottom-0 h-[50px] w-full bg-black bg-opacity-50 rounded-xl flex items-center justify-center">
          <span className="text-white pl-3 text-lg font-semibold ">Chari Charity Gala</span>
        </div>
      </div>

    </div>


</section>
{/*  End Section */}


{/*  start section  */}


{/*  End Section */}
</>
    )
  }

  export default AboutSection