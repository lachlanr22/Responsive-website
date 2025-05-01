# Rationale for the Gordon Andrews Website

The Gordon Andrews website was developed as a responsive, interactive, and visually cohesive experience that presents the life and work of the influential Australian designer. The site was built using semantic HTML, modern CSS, and vanilla JavaScript, with a focus on accessibility, mobile responsiveness, and interactive engagement. It reflects an iterative design process that incorporated both planned and emergent features, responding to both the design brief and usability considerations.

## Reflecting on the Development Process

One of the most challenging aspects of this project was making the site fully responsive across a range of screen sizes, particularly for mobile and tablet resolutions. I struggled with media queries and needed to restructure certain layouts, most notably the header, so that important content like navigation remained functional on smaller screens. This led to the removal or repositioning of non-essential elements to prioritise usability. According to Gustafson (2015), progressive enhancement strategies are key to delivering rich content while maintaining functional flexibility, and this principle helped guide my approach during these layout challenges.

Throughout development, I made several additions beyond what was outlined in my original prototype. These included new dedicated pages for the Catalogues, Banknotes, and Furniture projects, an expanded Gallery page, and an “About Gordon Andrews” section on the homepage. I also integrated lightbox functionality for images, which enhanced interactivity and user engagement. These decisions were made to support a more immersive and informative user experience, even though they were not part of the initial prototype. The decision to prioritise content hierarchy in this way aligns with the guidance of Lupton (2014), who notes that clear typographic structures improve user comprehension and help define content relationships.

All code, including the HTML, CSS, and JavaScript, was written independently. I used online sources and documentation to better understand complex elements, such as responsive breakpoints and flexbox behaviours, but all implementation decisions were my own.

Several accessibility-related issues emerged during validation. These included missing or visually hidden headings that were essential for screen reader accessibility and semantic structure. These were corrected with `<h2 class="visually-hidden">` elements to maintain both visual design and accessibility compliance. Ware (2012) notes that visual hierarchy plays a key role in helping users analyse information, and I applied this concept not only visually but semantically, ensuring screen readers could still access logical section structure.

## Alignment with the Prototype and Design Philosophy

The final website closely reflects the style and structure of the prototype. Although additional pages and sections were introduced, they follow the same visual layout and design logic. The site maintains a consistent dark mode aesthetic, minimalist design approach, and strong typographic hierarchy, as originally intended. The use of a dark interface was not only a stylistic decision but also a usability one. Budiu (2020) explains that dark mode can reduce visual fatigue and enhance image contrast, benefits that became especially relevant given the design-focused nature of the content.

In line with responsive design principles (Marcotte, 2014), I made layout adjustments to ensure consistent usability across all screen sizes. For example, image galleries and text blocks were converted to single-column layouts on smaller screens to avoid clutter and ensure readability. I also tested how elements adapted at various breakpoints and used flexbox and grid layouts to keep the design fluid and visually balanced.

## Testing and Functionality

The site’s responsiveness was tested using Firefox’s built-in responsive design mode (Ctrl + Shift + M), which helped identify breakpoints where layout adjustments were necessary. I also included keyboard accessibility features for the lightbox functionality, allowing users to navigate images using arrow keys and exit using the Escape key. These features reflect an understanding of inclusive interaction design, ensuring all users, not just those using a mouse, can interact with media-rich content.

## Strengths and Areas for Improvement

The strongest elements of this website include the seamless responsiveness on mobile devices, the successful integration of lightbox interactivity, and the visual consistency between the prototype and the final product. A particular strength is how each page not only looks refined but also functions smoothly across screen sizes.

I recognise there is room for improvement in my CSS code organisation. The issues include duplicated rules and some inefficient class structures, which I would clean up in future versions. Additionally, while I added section titles and comments later in the process, more detailed inline commentary explaining the purpose behind layout choices would have helped with future maintainability and assessment.

## Conclusion

This project not only demonstrates technical and aesthetic competence, but also a strong engagement with modern front-end principles. By critically reflecting on the development process, responding to validation feedback, and incorporating unit content into my decisions, I was able to produce a site that is accessible, functional, and engaging. The Gordon Andrews website reflects not only the story of a significant Australian designer, but also my development as a front-end developer.

## References

Budiu, R. (2020). *Dark mode and usability: Pros and cons*. Nielsen Norman Group. https://www.nngroup.com/articles/dark-mode/

Gustafson, A. (2015). *Adaptive web design: Crafting rich experiences with progressive enhancement* (2nd ed.). New Riders. https://adaptivewebdesign.info

Lupton, E. (2014). *Thinking with type: A critical guide for designers, writers, editors, & students* (2nd ed.). Princeton Architectural Press. https://thinkingwithtype.com

Marcotte, E. (2014). *Responsive web design* (2nd ed.). A Book Apart. https://abookapart.com/products/responsive-web-design

Ware, C. (2012). *Information visualization: Perception for design*. https://www.elsevier.com/books/information-visualization/ware/978-0-12-381464-7
