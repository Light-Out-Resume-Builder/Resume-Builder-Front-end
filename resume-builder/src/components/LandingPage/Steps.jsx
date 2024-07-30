import Step1 from '../../assets/images/step1.png';
import Step2 from '../../assets/images/step2.png';
import Step3 from '../../assets/images/step3.png';
import Step4 from '../../assets/images/step4.png';

const Steps = () => {
  const steps = [
    { img: Step1, title: "Pick a Template", description: "Select our template from a range of field-tested styles and formats." },
    { img: Step2, title: "Add Your Information", description: "Fill in the blanks, use our pre-written phrases and interactive layout to create a winning resume/cover letter." },
    { img: Step3, title: "Customize Your Layouts", description: "Give your document a professional and elegant look." },
    { img: Step4, title: "Hit Download!", description: "Download your resume, apply, get more interviews." }
  ];

  return (
    <section className="mt-7 md:mt-14 md:px-20 px-10 font-[Poppins]">
      <h1 className="md:text-4xl lg:text-4xl text-base font-bold text-center">
        Build your <span className="text-[#1E40AF]">resume</span> in 4 steps
      </h1>
      {steps.map((step, index) => (
        <div key={index} className={`md:flex block pt-8 ${index % 2 === 0 ? 'md:pt-1' : 'md:pt-1 justify-end'}`}>
          <img src={step.img} alt={`Step ${index + 1}`} className="md:size-60 size-32 flex justify-center" />
          <h1 className="text-[#1E40AF] font-bold text-2xl md:text-6xl md:mr-6 md:pt-1">{index + 1}.</h1>
          <div className="md:ml-4 md:pt-1">
            <h1 className="text-[#1E40AF] font-bold md:text-2xl text-xl">{step.title}</h1>
            <p className="text-xs md:text-base">{step.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Steps;
