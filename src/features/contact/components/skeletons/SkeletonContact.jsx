import Section from "@/components/ui/Section";

const SkeletonContact = () => {
  return (
    <Section title="Contacto" bgClass="section--dark">
      <div className="contact__grid">
        {/* Contact Info Skeleton */}
        <div className="contact__info">
          <div className="h-6 w-3/4 skeleton mb-8"></div>
          <div className="contact__links-container space-y-4">
            <div className="h-8 w-48 skeleton"></div>
            <div className="contact-links mt-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-10 w-10 rounded-full skeleton"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form Skeleton */}
        <div className="contact__form-container">
          <div className="h-8 w-48 skeleton mb-6"></div>
          <div className="space-y-4">
            <div>
              <div className="h-4 w-24 skeleton mb-1"></div>
              <div className="h-12 w-full rounded-xl skeleton"></div>
            </div>
            <div>
              <div className="h-4 w-24 skeleton mb-1"></div>
              <div className="h-12 w-full rounded-xl skeleton"></div>
            </div>
            <div>
              <div className="h-4 w-24 skeleton mb-1"></div>
              <div className="h-32 w-full rounded-xl skeleton"></div>
            </div>
            <div className="h-12 w-full rounded-full skeleton mt-6"></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkeletonContact;
