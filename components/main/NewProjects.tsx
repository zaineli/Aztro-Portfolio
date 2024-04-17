import Carousel from "./Carousel";

function NewProjects() {
  const uiProjects = [
    {
      title: "Great looking website.",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
    {
      title: "Great looking website.",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
  ];

  const pythonProjects = [
    {
      title: "Some of the pyhton projects",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
    {
      title: "Great looking website.",
      description: `Made in 2 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/CardImage.png",
    },
    {
      title: "Great normal WEbsite",
      description: `Made in 123123 days by our UI/UX developers and graphic designers. We have been specilizaing in this domain since the last 2 days. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis eaque aliquam harum magni. Tempora eum accusamus odio esse aut.`,
      image: "/brainwave.png",
    },
  ];

  return (
    <div className="">
      <div className="my-32 mt-0 w-full text-white px-16">
        <h1 className="text-center font-bold text-4xl">UI/UX Work</h1>
        <p className="my-8">
          We have been specilizaing in this domain since the last 2 days. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem
          quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis
          eaque aliquam harum magni. Tempora eum accusamus odio esse aut.
        </p>
        <Carousel projects={uiProjects} />
      </div>

      <div className="my-32  w-full text-white px-16">
        <h1 className="text-center font-bold text-4xl">Python Work</h1>
        <p className="my-8">
          We have been specilizaing in this domain since the last 2 days. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem
          quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis
          eaque aliquam harum magni. Tempora eum accusamus odio esse aut.
        </p>
        <Carousel projects={pythonProjects} />
      </div>

      <div className="my-32  w-full text-white px-16">
        <h1 className="text-center font-bold text-4xl">UI/UX Work</h1>
        <p className="my-8">
          We have been specilizaing in this domain since the last 2 days. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Quod, voluptatem
          quo quam, inventore totam sit ex cupiditate dolores perferendis, omnis
          eaque aliquam harum magni. Tempora eum accusamus odio esse aut.
        </p>
        <Carousel projects={uiProjects} />
      </div>
    </div>
  );
}

export default NewProjects;
