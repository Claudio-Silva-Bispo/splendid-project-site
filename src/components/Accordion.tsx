import * as React from 'react';
import Head from 'next/head';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

// Icones
import PublicIcon from '@mui/icons-material/Public';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import AddHomeIcon from '@mui/icons-material/AddHome';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: '1px solid #e5e7eb',
  borderRadius: '8px',
  marginBottom: '8px',
  '&:last-child': {
    marginBottom: '0',
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(() => ({
  backgroundColor: '#ffffff', 
  padding: '16px',
  '& .MuiAccordionSummary-content': {
    marginLeft: '8px',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-root': {
    fontSize: '1rem',
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
  padding: '16px',
  backgroundColor: '#f9fafb',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <Head>
        {/* Schema FAQ para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What cities does Splendid Cleaning Service cover in Washington?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Splendid Cleaning Service is available in Seattle, Bellevue, Bothell, Brier, Carnation, Edmonds, Everett, Kenmore, Kirkland, Lynnwood, Mill Creek, Monroe, Mukilteo, Redmond, Shoreline, Snohomish, Tacoma, Woodinville, and more cities across Greater Seattle Area and King County, Washington."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to prepare your home for a professional cleaning service in Seattle?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To prepare your home for professional cleaning in Seattle: 1) Declutter common areas by putting away items like toys, clothes, and dishes. 2) Store valuable and personal items such as jewelry and important documents. 3) Communicate special instructions to the cleaning team about areas that need extra attention or should be avoided. This ensures maximum efficiency during the cleaning visit."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to keep a home office clean and organized in Washington?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "To keep a home office clean in Washington: 1) Declutter regularly by tidying up your desk daily. 2) Establish a filing system for documents using labeled folders. 3) Keep your desk clean with only essential items. These practices help maintain productivity and create a pleasant working environment for remote work."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I contact Splendid Cleaning Service?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Contact Splendid Cleaning Service through: 1) Phone: (206) 376-3755 available anytime. 2) Email: splendidcleaningusa@gmail.com. 3) SMS: (206) 376-3755. 4) WhatsApp: (206) 376-3755. 5) Social Media: Instagram and Facebook. We're ready to help with your cleaning needs in Seattle, Bellevue, and Tacoma areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are Splendid Cleaning Service business hours?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Splendid Cleaning Service operates Monday to Saturday, from 08:00 AM to 06:00 PM. Our services can be customized to daily, weekly, biweekly, monthly, or one-time cleaning according to your needs in Seattle, Bellevue, Tacoma, and surrounding areas."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What are the best cleaning tips for Washington residents?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Top cleaning tips for Seattle/Washington residents: 1) Invest in quality doormats to capture mud and moisture from rain. 2) Keep your home shoe-free to reduce tracked dirt. 3) Combat humidity with dehumidifiers to prevent mold, especially in basements and bathrooms. These strategies help maintain a clean home year-round despite Seattle's rainy weather."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <section className='min-h-[60vh] flex flex-col justify-center p-5 m:pt-20' id="faq">
        
        <div className="before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:bg-gray-700 pt-20 md:p-0 flex flex-col mb-6">
          <h2 className="text-5xl text-gray-700 md:mb-0 font-bold">
            Frequently Asked Questions - Splendid Cleaning Service
          </h2>
          <p className="text-lg text-gray-600 mt-2">
            Serving Seattle, Bellevue, Tacoma & surrounding areas
          </p>
        </div>

        <div className="space-y-4">
          <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
            <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
              <PublicIcon className='mr-3'/>
              <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                Service available in the following cities
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                <strong>Serving Greater Seattle Area and King County, Washington:</strong>
                <span>
                  Seattle, Bellevue, Bothell, Brier, Carnation, Edmonds, Everett, Kenmore, Kirkland, Lynnwood, Mill Creek, Monroe, Mukilteo, Redmond, Shoreline, Snohomish, Tacoma, Woodinville, Renton, Kent, Federal Way, and more.
                </span>
                <span className="text-sm text-gray-500">
                  Professional residential and commercial cleaning services across Washington State
                </span>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
            <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
              <AddHomeIcon className='mr-3'/>
              <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                How to Prepare Your Home for a Professional Cleaning Service
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                <p>
                  Hiring a professional cleaning service in Seattle is an excellent way to ensure your home remains spotless, even during the busiest weeks. However, there are a few steps you can take before the cleaning team arrives to maximize efficiency and make the most of their visit. Here is a guide on how to prepare your home for a professional cleaning service.
                </p>
                
                <span className='font-bold'>1. Declutter Common Areas</span>
                <p>
                  Cleaning around clutter can slow down the cleaning process. Take a few minutes to put away items like toys, clothes, dishes, and other personal belongings from countertops, floors, and tables. This allows the cleaning team to focus on deep cleaning rather than tidying up the clutter.
                </p>

                <span className='font-bold'>2. Store Valuable and Personal Items</span>
                <p>
                  Although professional cleaning services are trustworthy, it is a good practice to store valuable or sensitive items such as jewelry, money, important documents, or small electronics. This gives you peace of mind and ensures that nothing is accidentally misplaced during the cleaning.
                </p>
                
                <span className='font-bold'>3. Communicate Special Instructions</span>
                <p>
                  Every home is different, so if there are specific areas you want the cleaning team to focus on or avoid, inform them in advance. Whether it&apos;s a fragile item that requires careful handling or a particular room that needs extra attention, clear communication ensures your needs are met.
                </p>

                <a href='/Tips' className='text-quinta font-semibold'>Learn more cleaning tips →</a>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
            <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
              <CleanHandsIcon className='mr-3'/>
              <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                How to Keep a Home Office Clean and Organized in Washington
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                <p>
                  With the rise of remote work, more Washington residents are setting up home offices to stay productive and focused. However, working from home brings its own challenges, especially when it comes to keeping your workspace clean and organized. A tidy home office not only boosts productivity but also creates a more pleasant working environment. Here are some tips to help you keep a home office clean and organized.
                </p>

                <span className='font-bold'>1. Declutter Regularly</span>
                <p>
                  Clutter can quickly accumulate in a home office, especially if you&apos;re juggling multiple tasks. Take a few minutes at the end of each day to tidy up your desk, put away papers, and remove any items that don&apos;t belong. Regular decluttering helps maintain a clear workspace and reduces distractions.
                </p>

                <span className='font-bold'>2. Establish a Filing System</span>
                <p>
                  Papers and documents can easily pile up if not managed properly. Create a filing system for important documents, invoices, and notes. Use labeled folders or files to keep everything organized and easy to find. For digital files, consider using cloud storage and organizing them into folders for quick access.
                </p>
                
                <span className='font-bold'>3. Keep Your Desk Clean</span>
                <p>
                  A clutter-free desk is essential for a productive workday. Limit the items on your desk to the essentials: your computer, a notebook, and a few frequently used supplies. Use drawer organizers or desk trays to store pens, paper clips, and other small items out of sight.
                </p>

                <a href='/Tips' className='font-bold text-quinta'>Learn more cleaning tips →</a>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
            <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
              <PhoneForwardedIcon className='mr-3'/>
              <Typography className='font-bold text-md sm:text-xl text-gray-700'>Contacts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className='flex flex-col gap-3 text-gray-700 text-sm m:text-xl'>
                <span className='font-bold'>📞 1. Call</span>
                <span>We receive calls at any time: <a href="tel:+12063763755" className="text-quinta font-semibold">(206) 376-3755</a></span>
                
                <span className='font-bold'>📧 2. Email</span>
                <span>Contact us at: <a href="mailto:splendidcleaningusa@gmail.com" className="text-quinta">splendidcleaningusa@gmail.com</a></span>
                
                <span className='font-bold'>💬 3. SMS</span>
                <span>Text us at: <a href="sms:+12063763755" className="text-quinta font-semibold">(206) 376-3755</a></span>
                
                <span className='font-bold'>📱 4. WhatsApp</span>
                <span>We are available on WhatsApp: <a href="https://wa.me/12063763755" target="_blank" rel="noopener noreferrer" className="text-quinta font-semibold">(206) 376-3755</a></span>
                
                <span className='font-bold'>🌐 5. Social Media</span>
                <span>Follow us on Instagram and Facebook for cleaning tips and updates!</span>
                
                <span className="text-sm text-gray-500 mt-2">
                  Serving Seattle, Bellevue, Tacoma, and surrounding areas
                </span>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
            <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
              <CalendarMonthIcon className='mr-3'/>
              <Typography className='font-bold text-md sm:text-xl text-gray-700'>Business Hours</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                <strong>Operating Hours:</strong>
                <span>📅 Monday to Saturday: 08:00 AM - 06:00 PM</span>
                <span>🕐 Closed Sundays</span>
                
                <strong className='mt-3'>Service Frequency Options:</strong>
                <span>Our services can be customized to:</span>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Daily cleaning</li>
                  <li>Weekly cleaning</li>
                  <li>Biweekly cleaning</li>
                  <li>Monthly cleaning</li>
                  <li>One-time deep cleaning</li>
                </ul>
                <span className="text-sm text-gray-500 mt-2">
                  Flexible scheduling for your convenience in Seattle, Bellevue & Tacoma
                </span>
              </div>
            </AccordionDetails>
          </Accordion>

          <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
            <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
              <LibraryAddIcon className='mr-3'/>
              <Typography className='font-bold text-md sm:text-xl text-gray-700'>
                10 Cleaning Tips for Washington Residents
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className='flex flex-col gap-3 text-gray-600 text-sm m:text-xl'>
                <span className='font-bold text-lg'>Keep Your Space Shining All Year Round</span>
                
                <p>
                  Living in Seattle presents a unique set of challenges, especially when it comes to keeping your home clean. The city&apos;s rainy weather can make maintaining a tidy space seem like a daunting task. However, with some strategic tips and tricks, you can keep your home shining all year round, rain or shine. Here are our top 10 cleaning tips:
                </p>

                <span className='font-bold'>1. Invest in Quality Doormats</span>
                <p>
                  The rainy season in Seattle can lead to muddy footprints and water stains. Place high-quality doormats both outside and inside each entrance to capture dirt and moisture before they spread throughout the house. Remember to clean the doormats regularly to ensure they remain effective.
                </p>
                
                <span className='font-bold'>2. Keep Your Home Shoe-Free</span>
                <p>
                  Encourage a no-shoes policy inside the house. This simple rule helps reduce the amount of dirt, rainwater, and debris that gets tracked in. Consider providing slippers or comfortable socks for guests as an extra touch of hospitality.
                </p>

                <span className='font-bold'>3. Combat Humidity with Dehumidifiers</span>
                <p>
                  Seattle&apos;s humid climate can lead to excess moisture in your home, causing mold and mildew. Combat this by using dehumidifiers, especially in basements, bathrooms, and closets. Check and clean your dehumidifiers regularly to keep them running efficiently.
                </p>

                <a href='/Tips' className='font-bold text-quinta'>Read all 10 cleaning tips →</a>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    </>
  );
}