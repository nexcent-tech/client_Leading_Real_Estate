const testimonials = [
  {
    text: ` <div class="flex justify-center text-5xl mb-4"><img src="./assets/images/icons/2c94eac8-e384-415e-b8cd-88015c55cbf8.svg" alt=""></div><span class="bg-green-500 text-white px-1 font-semibold">I am delighted to have partnered with AMARA GROUP</span> for a joint venture agreement to develop my land in North Gulshan. From the moment we signed the agreement, AMARA GROUP has consistently demonstrated their commitment to excellence and professionalism.`,
  },
  {
    text: ` <div class="flex justify-center text-5xl mb-4"><img src="./assets/images/icons/2c94eac8-e384-415e-b8cd-88015c55cbf8.svg" alt=""></div><span class="bg-green-500 text-white px-1 font-semibold">Exceptional support and follow-up</span>. They really care about their clients' satisfaction.`,
  },
  {
    text: ` <div class="flex justify-center text-5xl mb-4"><img src="./assets/images/icons/2c94eac8-e384-415e-b8cd-88015c55cbf8.svg" alt=""></div><span class="bg-green-500 text-white px-1 font-semibold">Very professional and transparent process</span>. We were informed at every stage.`,
  },
  {
    text: ` <div class="flex justify-center text-5xl mb-4"><img src="./assets/images/icons/2c94eac8-e384-415e-b8cd-88015c55cbf8.svg" alt=""></div><span class="bg-green-500 text-white px-1 font-semibold">Timely delivery with excellent construction quality</span>. Happy with our new home.`,
  },
  {
    text: ` <div class="flex justify-center text-5xl mb-4"><img src="./assets/images/icons/2c94eac8-e384-415e-b8cd-88015c55cbf8.svg" alt=""></div><span class="bg-green-500 text-white px-1 font-semibold">AMARA plans projects and carries them out </span> so that projects are completed ahead of schedule and under budget. They are part of my family now.`,
  },
  {
    text: ` <div class="flex justify-center text-5xl mb-4"><img src="./assets/images/icons/2c94eac8-e384-415e-b8cd-88015c55cbf8.svg" alt=""></div><span class="bg-green-500 text-white px-1 font-semibold">Choosing AMARA GROUP to develop my land</span> was the best investment I ever made. Their passion for innovation and attention to detail resulted in a project that not only adds value to the area but also serves as a benchmark for sustainable development. Trusting them was the smartest move I made.`,
  },
  {
    text: ` <div class="flex justify-center text-5xl mb-4"><img src="./assets/images/icons/2c94eac8-e384-415e-b8cd-88015c55cbf8.svg" alt=""></div><span class="bg-green-500 text-white px-1 font-semibold">From the moment I engaged with AMARA GROUP</span> I knew I was in capable hands. Their ability to turn my land into a masterpiece, ahead of schedule and within budget, speaks volumes about their expertise and dedication. They don't just build structures; they craft legacies.`,
  },
];

onload = function () {
  // Show the first testimonial by default
  showTestimonial(0);
};
setInterval(() => {
  // Get the current index of the displayed testimonial
  const currentIndex = testimonials.findIndex(
    (testimonial) =>
      testimonial.text === document.getElementById("testimonialText").innerHTML
  );
  // Calculate the next index
  const nextIndex = (currentIndex + 1) % testimonials.length;
  // Show the next testimonial

  const testimonialText = document.getElementById("testimonialText");
  testimonialText.innerHTML = testimonials[nextIndex].text;
}, 5000);
// Function to show the testimonial based on the index
function showTestimonial(index) {
  const testimonialText = document.getElementById("testimonialText");
  testimonialText.innerHTML = testimonials[index].text;

  // Update active thumbnail styling
  const buttons = document.querySelectorAll(".thumbnail");
  buttons.forEach((btn) => btn.classList.remove("bg-black", "text-white"));
  buttons[index].classList.add("bg-black", "text-white");
}
