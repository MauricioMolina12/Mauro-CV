import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss',
})
export class ExperiencesComponent {
  experiences = [
    {
      company: 'Merca Datos SAS',
      time: 'April 2025 - Present',
      logo: 'assets/mercadatos.jpg',
      positions: [
        {
          title: 'Systems Practitioner',
          description: '',
        },
      ],
    },
    {
      company: 'Edutin Academy',
      time: 'April 2024 - December 2024 (9 Months)',
      logo: 'assets/logo-edutin.png',
      positions: [
        {
          title: 'Frontend & Mobile Android Developer',
          description: `I designed and developed modern applications using Angular, Figma, and Ionic, ensuring high performance and adaptability across multiple devices. I built native features for Android using Kotlin as the primary language. I efficiently integrated REST and GraphQL APIs to optimize real-time data exchange, enhance scalability, and meet business objectives. I managed version control with Git, collaborating with cross-functional teams in agile environments to ensure timely and high-quality deliveries. Additionally, I implemented accessibility and optimization strategies to align products with current standards and improve the end-user experience.`,
        },
        {
          title: 'Teacher and course designer',
          description: `I created, developed, and recorded new courses for Edutin Academy. I worked closely with cross-functional teams to design and develop interactive educational content. I provided activity review services and corrected issues in active courses.`,
          courses: [
            {
              title: 'Angular',
              image: 'assets/angular.png',
              slug: 'https://edutin.com/curso-de-angular',
            },
            {
              title: 'CSS',
              image: 'assets/css.png',
              slug: 'https://edutin.com/curso-de-css3',
            },
            {
              title: 'Ionic',
              image: 'assets/ionic.png',
              slug: 'https://edutin.com/curso-de-ionic',
            },
          ],
        },
      ],
    },

    {
      company: 'Freelancer',
      time: 'Present',
      logo: 'assets/free.png',
      positions: [
        {
          title: 'Frontend & Mobile Android Developer',
          description: `I am a versatile, freelance frontend developer with experience building web and mobile applications using cutting-edge technologies such as Angular, React, React Native, Firebase, GraphQL, JavaScript, Ionic, Flutter and Node.js. My skills allow me to offer high-quality, customized solutions for a variety of industries, including education, startups and the technology sector.With a strong focus on user experience and design, I create intuitive and visually engaging interfaces that align with clients' goals. I also use tools like Figma to bring concepts to life, ensuring that functionality and aesthetics go hand in hand. As a freelancer, I pride myself on my adaptability, effective communication and timely delivery. Whether you need a responsive web app, a dynamic mobile solution, or expert guidance for your project, I'm here to help you make your vision a reality. Let's collaborate!`,
        },
      ],
    },
    {
      company: 'Designer UI/UX Freelancer',
      time: 'Present',
      logo: 'assets/designer.webp',
      positions: [
        {
          title: 'Designer',
          description: `I am an experienced graphic designer with experience in creating attractive and effective visual solutions that communicate ideas and emotions in an impactful way. I master tools such as Adobe Photoshop, Illustrator and InDesign, which allows me to develop everything from visual identities to advertising pieces and digital content. My approach combines creativity, technique and attention to detail to transform concepts into designs that stand out. I specialize in the design of logos, flyers, banners and content for social networks, adapting to the specific needs of each project and client. Passionate about design and always learning, I am ready to help you bring your ideas to life and make your brand or project stand out. Let's connect and work together!"`,
        },
      ],
    },
  ];
}
