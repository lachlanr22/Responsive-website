https://lachlanr22.github.io/Responsive-website/

# Rationale for the Gordon Andrews Website

The Gordon Andrews website was developed as a responsive, interactive, and visually cohesive experience that presents the life and work of the influential Australian designer. The site was built using semantic HTML, modern CSS, and vanilla JavaScript, with a focus on accessibility, responsiveness, and user engagement. It reflects an iterative design process that incorporated both planned and emergent features, responding to the design brief and usability challenges.

## Reflecting on the Development Process

One of the most challenging aspects of this project was making the site responsive across a range of screen sizes, particularly mobile and tablet. I struggled with media queries and had to restructure layouts, especially the header, to ensure content remained visible. This led to the removal or repositioning of non-essential elements to prioritise usability. According to Gustafson (2015), progressive enhancement is key to delivering rich content while maintaining flexibility, a concept that guided my approach.

Several additions were made beyond the original prototype. These included new pages for the Catalogues, Banknotes, and Furniture, an expanded Gallery, and an “About Gordon Andrews” section on the homepage. Lightbox functionality was also added to improve image interactivity. These changes created a more immersive and informative experience.

All code was written independently. While I consulted documentation and forums to understand flexbox and responsive behaviour, all implementation decisions were deliberate and personally reasoned.

Accessibility issues emerged during validation, such as missing or visually hidden headings for screen readers. These were corrected using `<h2 class="visually-hidden">` elements to retain visual design while ensuring semantic structure. Ware (2012) highlights the importance of visual hierarchy in aiding comprehension, which I reflected in both markup and layout.

## Alignment with the Prototype and Design Philosophy

The final website closely reflects the visual style and structure of the prototype. While more content was added, it followed the same layout logic and typographic structure. A consistent dark mode aesthetic, minimalist approach, and grid-based hierarchy were preserved. The decision to use dark mode was both stylistic and functional. Budiu (2020) explains that dark interfaces reduce eye strain and enhance contrast, benefits that support the visual nature of this project.

Responsive layouts were implemented using media queries at key breakpoints. Text blocks and image sections collapse into single columns on smaller devices to minimise clutter and maintain clarity. Flexbox and grid layouts ensured alignment remained consistent as screen sizes changed.

## Testing and Functionality

Responsiveness was tested using Firefox’s responsive design mode, which helped identify layout issues across screen sizes. Keyboard-accessible navigation was implemented in the lightbox, allowing users to interact using arrow keys and Escape. These features supported inclusive design and aligned with accessibility expectations.

## Strengths and Areas for Improvement

Key strengths include seamless responsiveness on small screens, the functional lightbox interactivity, and consistency with the prototype’s visual tone. Each page maintains a polished, cohesive feel.

Areas for improvement include the CSS code structure. Inefficient class naming and repeated rules remain, which I would revise in future versions. Although I added section titles and high-level comments, more detailed commentary would improve maintainability and understanding of the codebase.

## Conclusion

This project demonstrates technical skill, design consistency, and critical engagement with web design principles. Through constant iteration, testing, and reflection, I produced a site that not only shares the legacy of Gordon Andrews but also highlights my growth as a front-end developer.

---

## References

Budiu, R. (2020). *Dark mode and usability: Pros and cons*. Nielsen Norman Group. https://www.nngroup.com/articles/dark-mode/

Gustafson, A. (2015). *Adaptive web design: Crafting rich experiences with progressive enhancement* (2nd ed.). New Riders. https://adaptivewebdesign.info

Ware, C. (2012). *Information visualization: Perception for design*. https://www.elsevier.com/books/information-visualization/ware/978-0-12-381464-7