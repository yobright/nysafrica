import Accordion from "./Accordion";
import { accordionData } from '../utils/AccordionContent';

export default function FAQ() {

  return (
    <div className="faq">
        <h1>FAQ</h1>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
        </div>
    </div>
  );
}
