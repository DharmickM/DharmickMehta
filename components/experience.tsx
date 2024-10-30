'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const experiences = [
  {
    title: 'Reporting and Insights Analyst',
    company: 'Mecca Brands',
    period: 'April 2023 - July 2024',
    logo: '/mecca_brands_logo.jpeg',
    description: [
      'Developed and deployed a SARIMA/X forecasting model using AWS SageMaker, improving sales prediction accuracy by over 90% across all channels.',
      'Provided insights from the model that guided strategic initiatives for key stakeholders, including executive leadership, influencing campaigns that impacted over 6 million loyalty members.',
      'Created data-driven insight packs presented to over 80 brand founders, showcasing campaign impacts on sales. The insights led to adjustments in promotional strategies, improving brand engagement.',
      'Led the development and execution of a strategic plan to migrate the loyalty business function to Salesforce. Directed the system design and oversaw the transition, ensuring seamless functionality across 5 platforms.',
      'Spearheaded the migration from PostgreSQL to Snowflake in our loyalty business function, streamlining reporting processes and data mart construction.',
      'Owned reports in Tableau relating to campaign activities, unveiling insights into campaign effects on customer spending behaviors, driving targeted marketing strategies.',
    ],
    skills: [
      'AWS SageMaker',
      'SARIMA/X Forecasting',
      'Salesforce',
      'PostgreSQL',
      'Snowflake',
      'Tableau',
      'Data Analysis',
      'Strategic Planning',
    ],
  },
  {
    title: 'Strategy Analyst',
    company: 'Manawa Energy',
    period: 'December 2021 - March 2023',
    logo: '/Manawa.jpeg',
    description: [
      'Developed and optimized price paths in the New Zealand Energy Market, providing key insights for strategic energy hedging that contributed to reduced exposure to price volatility and informed decisions for generation development.',
      'Influenced and shaped company-wide strategic goals, contributing to organizational success.',
      'Managed the Middle Office function at Manawa, ensuring ASX trading compliance with company policies and Electricity Authority guidelines.',
      'Designed and implemented an automation system, reducing manual reporting time, equivalent to freeing up 0.25-0.5 FTE. Allowing the team to focus on higher-value tasks.',
    ],
    skills: [
      'Energy Market Analysis',
      'Strategic Planning',
      'ASX Trading Compliance',
      'Process Automation',
      'Data Analysis',
    ],
  },
  {
    title: 'Data Analyst',
    company: 'Trustpower',
    period: 'February 2020 - December 2021',
    logo: '/trustpower_logo.jpeg',
    description: [
      'Developed interactive tools and reports using PowerBI. These reports were the most widely used and had 100+ users a week.',
      "Created reporting on the company's carbon emissions to ensure adherence to ESG goals.",
      'Spearheaded the Amazon Telephony Project reporting, replacing the Desktop Telephony platform with a comprehensive suite of agent and contact metrics used for training.',
      'Used DBT and Snowflake to create a data mart for CX data that is ready for reporting.',
      'Collaborated closely with Provisioning and Assure teams to modernize historical reporting, consulting with team leaders to offer operational insights.',
    ],
    skills: [
      'PowerBI',
      'Carbon Emissions Reporting',
      'Amazon Telephony',
      'DBT',
      'Snowflake',
      'Data Mart Creation',
      'Operational Insights',
    ],
  },
  {
    title: 'Chief Technology Officer / Co-Founder',
    company: 'One Earth Technology / Special Studios',
    period: 'November 2018 - June 2023',
    logo: '/SpecialStudioLogoBlack.webp',
    description: [
      'Conducting research of over 800 peer-reviewed papers for a feasibility study.',
      'Creating a business strategic plan, marketing plan, and technical feasibility report on 3D printing houses.',
      'Meetings/Presentations with potential investors and contractors.',
      'Using CAD software to model parts.',
    ],
    skills: [
      'Research',
      'Business Strategy',
      'Marketing',
      'Technical Feasibility',
      'CAD Software',
      '3D Printing',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'Callaghan Innovation',
    period: 'November 2017 - May 2018',
    logo: '/MSL.jpeg',
    description: [
      'Engaged in comprehensive problem-solving, data analysis, and experiment planning.',
      'Presented detailed research findings to the staff at MSL using MS PowerPoint, highlighting key experimental insights and outcomes.',
      'Conducted advanced optical and thermal experiments, utilizing a goniospectrophotometer and a thermal furnace with a homogeneity scanner.',
      'Analyzed color calibration reference tiles and thermocouple data using MS Excel, supplemented with custom Python algorithms for enhanced data interpretation.',
    ],
    skills: [
      'Data Analysis',
      'Experiment Planning',
      'MS PowerPoint',
      'Optical Experiments',
      'Thermal Experiments',
      'MS Excel',
      'Python',
    ],
  },
];

export default function Experience() {
  return (
    <div className={`p-0   space-y-8 ${inter.className}`}>
     
      <div className="space-y-6">
        
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 relative rounded-lg overflow-hidden bg-background">
                      <Image
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold ${inter.className}`}>{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="secondary">{exp.period}</Badge>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className={`text-muted-foreground ${inter.className}`}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
