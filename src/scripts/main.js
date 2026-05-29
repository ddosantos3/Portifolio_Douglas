(function () {
  const data = window.portfolioData || {};
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const create = (tag, className, text) => {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  };

  const icon = (name) => {
    const element = create("i");
    element.setAttribute("data-lucide", name);
    element.setAttribute("aria-hidden", "true");
    return element;
  };

  const tags = (items = []) => {
    const list = create("div", "tag-list");
    items.forEach((item) => list.append(create("span", "tag", item)));
    return list;
  };

  const wrapCard = (className = "glass-card") => {
    const card = create("article", className + " tilt-card anim-item");
    card.setAttribute("data-tilt", "");
    return card;
  };

  const renderFocusCards = () => {
    const target = document.querySelector('[data-render="focusCards"]');
    if (!target || !Array.isArray(data.focusCards)) return;

    data.focusCards.forEach((item) => {
      const card = wrapCard();
      const inner = create("div", "card-inner");
      const iconBox = create("div", "icon-box");
      iconBox.append(icon(item.icon));
      inner.append(iconBox, create("p", "card-meta", item.meta), create("h3", "", item.title), create("p", "", item.description), tags(item.tags));
      card.append(inner);
      target.append(card);
    });
  };

  const renderCompetencies = () => {
    const target = document.querySelector('[data-render="competencies"]');
    if (!target || !Array.isArray(data.competencies)) return;

    data.competencies.forEach((item) => {
      const card = wrapCard();
      const inner = create("div", "card-inner");
      const iconBox = create("div", "icon-box");
      iconBox.append(icon(item.icon));
      inner.append(iconBox, create("h3", "", item.title), create("p", "", item.description), tags(item.tags));
      card.append(inner);
      target.append(card);
    });
  };

  const renderProjects = () => {
    const target = document.querySelector('[data-render="projects"]');
    if (!target || !Array.isArray(data.projects)) return;

    data.projects.forEach((item) => {
      const card = wrapCard(item.featured ? "project-card is-featured" : "project-card");
      const inner = create("div", "project-inner");
      const main = create("div", "project-main");
      const side = create("div", "project-side");
      const top = create("div", "project-top");
      top.append(create("span", "project-category", item.category), create("span", "project-status", item.status));
      main.append(top, create("h3", "", item.title), create("p", "", item.description));

      const listTitle = create("p", "project-list-title", "O que demonstra");
      const list = create("ul", "project-list");
      item.demonstrates.forEach((point) => list.append(create("li", "", point)));
      side.append(listTitle, list, tags(item.stack));

      const footer = create("div", "project-footer");
      if (item.link) {
        const link = create("a", "project-link", item.cta);
        link.href = item.link;
        link.target = "_blank";
        link.rel = "noreferrer";
        link.append(icon("external-link"));
        footer.append(link);
      } else {
        footer.append(create("span", "project-link is-muted", item.cta));
      }
      side.append(footer);

      inner.append(main, side);
      card.append(inner);
      target.append(card);
    });
  };

  const renderExperience = () => {
    const target = document.querySelector('[data-render="experience"]');
    if (!target || !Array.isArray(data.experience)) return;

    data.experience.forEach((item) => {
      const article = create("article", "timeline-item anim-item");
      const inner = create("div", "timeline-inner");
      const head = create("div", "job-head");
      const titleBlock = create("div");
      titleBlock.append(create("h3", "", item.company), create("p", "job-role", item.role));
      head.append(titleBlock, create("p", "job-meta", `${item.period} • ${item.location}`));

      const list = create("ul", "job-list");
      item.bullets.forEach((bullet) => list.append(create("li", "", bullet)));
      inner.append(head, create("p", "job-description", item.description), list);
      article.append(inner);
      target.append(article);
    });
  };

  const renderCertifications = () => {
    const target = document.querySelector('[data-render="certifications"]');
    if (!target || !Array.isArray(data.certifications)) return;

    data.certifications.forEach((item) => {
      const card = wrapCard();
      const inner = create("div", "card-inner");
      const iconBox = create("div", "icon-box");
      iconBox.append(icon(item.icon));
      inner.append(iconBox, create("p", "card-meta", item.issuer), create("h3", "", item.title), create("p", "", item.description));
      card.append(inner);
      target.append(card);
    });
  };

  const renderStack = () => {
    const target = document.querySelector('[data-render="stack"]');
    if (!target || !Array.isArray(data.stackGroups)) return;

    data.stackGroups.forEach((group) => {
      const article = create("article", "stack-group anim-item");
      const inner = create("div", "stack-inner");
      const stackTags = create("div", "stack-tags");
      group.items.forEach((item) => stackTags.append(create("span", "stack-badge", item)));
      inner.append(create("h3", "", group.title), stackTags);
      article.append(inner);
      target.append(article);
    });
  };

  const renderWorkstyle = () => {
    const target = document.querySelector('[data-render="workstyle"]');
    if (!target || !Array.isArray(data.workstyle)) return;

    data.workstyle.forEach((item) => {
      const card = wrapCard();
      const inner = create("div", "card-inner");
      const iconBox = create("div", "icon-box");
      iconBox.append(icon(item.icon));
      inner.append(iconBox, create("h3", "", item.title), create("p", "", item.description));
      card.append(inner);
      target.append(card);
    });
  };

  const hydrateIcons = () => {
    if (window.lucide && typeof window.lucide.createIcons === "function") {
      window.lucide.createIcons();
    }
  };

  const initNav = () => {
    const header = document.querySelector("[data-header]");
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-nav-toggle]");
    const progress = document.querySelector("[data-scroll-progress]");
    const links = Array.from(document.querySelectorAll(".site-nav a"));
    const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

    const setMenuState = (isOpen) => {
      nav?.classList.toggle("is-open", isOpen);
      toggle?.setAttribute("aria-expanded", String(isOpen));
      toggle?.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
      const menuIcon = toggle?.querySelector("[data-lucide]");
      if (menuIcon) {
        menuIcon.setAttribute("data-lucide", isOpen ? "x" : "menu");
        hydrateIcons();
      }
    };

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const current = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (progress) progress.style.width = `${current}%`;
      if (header) header.classList.toggle("is-scrolled", window.scrollY > 18);
    };

    toggle?.addEventListener("click", () => {
      setMenuState(!nav?.classList.contains("is-open"));
    });

    links.forEach((link) => {
      link.addEventListener("click", () => {
        setMenuState(false);
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 });

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  };

  const initSmoothScroll = () => {
    if (prefersReducedMotion || typeof window.Lenis !== "function") return;

    const lenis = new window.Lenis({
      duration: 1.05,
      smoothWheel: true,
      wheelMultiplier: 0.86
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  };

  const syncPortraitHeight = () => {
    const heroCopy = document.querySelector(".hero-copy");
    const heroVisual = document.querySelector(".hero-visual");
    if (!heroCopy || !heroVisual) return;

    const isDesktop = window.matchMedia("(min-width: 1101px)").matches;
    if (!isDesktop) {
      heroVisual.style.removeProperty("--portrait-target-height");
      return;
    }

    const copyHeight = Math.round(heroCopy.getBoundingClientRect().height);
    const targetHeight = Math.max(420, Math.min(copyHeight, 520));
    heroVisual.style.setProperty("--portrait-target-height", `${targetHeight}px`);
  };

  const initAnimations = () => {
    const animated = Array.from(document.querySelectorAll("[data-animate], .anim-item"));
    if (prefersReducedMotion) {
      animated.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    if (window.gsap && window.ScrollTrigger) {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.set("[data-animate='hero-copy']", { opacity: 1, y: 0 });
      window.gsap.fromTo("[data-animate='hero-copy'] > *", {
        opacity: 0,
        y: 24
      }, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.08
      });

      window.gsap.fromTo("[data-animate='hero-visual']", {
        opacity: 0,
        y: 30,
        rotateX: 6
      }, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: 0.15
      });

      window.gsap.utils.toArray("[data-animate]").forEach((element) => {
        if (element.matches("[data-animate='hero-copy'], [data-animate='hero-visual']")) return;

        if (element.dataset.animate === "cards") {
          const cards = Array.from(element.children).filter((child) => child.classList.contains("anim-item"));
          window.gsap.set(element, { opacity: 1, y: 0 });
          window.gsap.fromTo(cards, {
            opacity: 0,
            y: 22
          }, {
            opacity: 1,
            y: 0,
            duration: 0.68,
            ease: "power3.out",
            stagger: 0.07,
            scrollTrigger: {
              trigger: element,
              start: "top 84%",
              once: true
            }
          });
          return;
        }

        window.gsap.fromTo(element, {
          opacity: 0,
          y: 26
        }, {
          opacity: 1,
          y: 0,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true
          }
        });
      });

      window.gsap.to("[data-float]", {
        y: -12,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.28
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });

    animated.forEach((element) => observer.observe(element));
  };

  const initTilt = () => {
    if (prefersReducedMotion || window.matchMedia("(pointer: coarse)").matches) return;

    document.querySelectorAll("[data-tilt]").forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((0.5 - (y / rect.height)) * 8);
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-3px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });
    });
  };

  const initContactModal = () => {
    const modal = document.querySelector("[data-contact-modal]");
    const openButton = document.querySelector("[data-contact-open]");
    const closeButtons = document.querySelectorAll("[data-contact-close]");
    const form = document.querySelector("[data-contact-form]");
    if (!modal || !openButton || !form) return;

    let lastFocused = null;

    const openModal = () => {
      lastFocused = document.activeElement;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      setTimeout(() => modal.querySelector("input")?.focus(), 40);
    };

    const closeModal = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      lastFocused?.focus?.();
    };

    openButton.addEventListener("click", openModal);
    closeButtons.forEach((button) => button.addEventListener("click", closeModal));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });

    document.addEventListener("click", (event) => {
      if (!modal.classList.contains("is-open")) return;
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (modal.contains(target) || openButton.contains(target)) return;
      closeModal();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const name = String(formData.get("nome") || "").trim();
      const phone = String(formData.get("telefone") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const message = String(formData.get("mensagem") || "").trim() || "Não informado.";

      const subject = encodeURIComponent(`Contato pelo portfólio - ${name}`);
      const body = encodeURIComponent([
        "Novo contato recebido pelo portfólio.",
        "",
        `Nome: ${name}`,
        `Telefone: ${phone}`,
        `E-mail: ${email}`,
        "",
        "Mensagem:",
        message
      ].join("\n"));

      window.location.href = `mailto:ddosantosmkt@gmail.com?subject=${subject}&body=${body}`;
      form.reset();
      closeModal();
    });
  };

  const init = () => {
    renderFocusCards();
    renderCompetencies();
    renderProjects();
    renderExperience();
    renderCertifications();
    renderStack();
    renderWorkstyle();
    hydrateIcons();
    syncPortraitHeight();
    initNav();
    initSmoothScroll();
    initAnimations();
    initTilt();
    initContactModal();
    window.addEventListener("resize", syncPortraitHeight, { passive: true });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
