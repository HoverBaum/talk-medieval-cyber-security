---
# try also 'default' to start simple
theme: ./slidev-theme-baum
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://source.unsplash.com/collection/94734566/1920x1080
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Developing Growth
  A practical guide to "Growth Hacking" by [Hendrik Wallbaum](https://hendrikwallbaum.de/).
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS (experimental)
css: unocss
layout: intro
---

# <Emoji label="Growing seedling">🌱</Emoji> Developing Growth

by Hendrik Wallbaum

---
layout: simple-intro
---

# <Emoji label="Growing seedling">🌱</Emoji> Developing Growth

by Hendrik Wallbaum

<!--
How do companies develop growth? While some see incredible periods of growth. Both in revenue and user count, other seem to be left behind.

How did companies such as Dropbox, Facebook or ... really kick off?
The thing they all shared in "Growth Hacking".
-->

---
layout: statement
emoji: 🌱
---

# Growth Hacking

<!--
A structured approach to driving growth.

Today I will share my experiences and help you bring Growth Hacking to your company.

It is what helped Dropbox to take of (referrals)!
Companies like Facebook have entire departments dedicated to it.
Many of our clients managed to drive low cost, high efficient growth applying the techniques I will share with you today.

-->

---
layout: speaker
speakerImage: /assets/speaker.jpg
---

# Hendrik Wallbaum

JS Enthusiast, Intrapreneur, <br/>Developer for fun.

Consultant @Netlight

<!-- 
Who am I to talk about this?
Worked on Growth teams and helped different clients structure, setup and run growth (hacking) teams and initiatives.
I Read the right books, you could do that too, but I bring some experience.
-->

---
layout: image-big
image: /assets/qrcode.png
imageLight: /assets/qrcode-light.png
---

<p></p>

<!--
My chance to take a first sip of water while I allow you to explore what is on the other end of this QR code.
-->

---
layout: two-browsers
---

<Browser url="https://netlight.wallbaum.dev/?group=0" fallbackImage="/assets/fallback/control.png" height="400"></Browser>

::right::

<Browser url="https://netlight.wallbaum.dev/?group=1" fallbackImage="/assets/fallback/experiment.png" height="400"></Browser>

<!--
Currently, we want to widen our client landscape.

One of the ways we want to drive this is by having a "reach out" button on the home page.

But, the conversion is really low 😞

THIS IS AN EXAMPLE!
-->

---
layout: image-left
image: /assets/shuttle.jpg
---

# Grow your company with confidence

<v-click>

1. Meet the growth team
2. Dive down the funnel
3. Take it home

</v-click>

---
layout: questions
emoji: ❓
---

# Orange text<br />==<br />time for questions

---
layout: statement
---

#  <Emoji>🫅</Emoji> <Emoji>🧑‍🎨</Emoji> <Emoji>🧑‍💼</Emoji> <Emoji>🧑‍🏫</Emoji> <Emoji>🧑‍💻</Emoji>

<!--
- Everyone is part of the entire process!
-->

---
layout: statement
emoji: 🫅
---

# Lead

<!--
- Holds team together
- Ideally brings experience
- Organizes meetings and work
- Decision maker - to keep team moving
-->

---
layout: statement
emoji: 🧑‍🎨
---

# Designer

<!--
- Good practices for design of features
- Often also brings feeling for user
- Understanding of brand
-->

---
layout: statement
emoji: 🧑‍💼
---

# Marketing

<!--
- Definitively understands brand and communication
- Writes copy for features
- Can setup marketing campaigns to get the right people into experiments
- Could help with analytics
-->

---
layout: statement
emoji: 🧑‍🏫
---

# Analyst

<!--
- The authority on analyzing and understanding data
- Both before and after experiments
-->

---
layout: statement
emoji: 🧑‍💻
---

# Developer

<!--
DO NOT talk about developer mindset, yet!

- Codes features and experiments
- Brings and understanding of the systems capabilities and what it could easily do
-->

---
layout: questions
---

# Cross functional teams

Growth teams benefit from members of different departments. 

---
layout: image-left
image: /assets/funnel/funnel-input.png
---

# Gathering input

<v-clicks>

Know your focus!

Gather a LOT!

</v-clicks>

<!--
- Focus: Strategic opportunities and growth loops.
- Can already mention "good ideas need many ideas". My girlfriend always likes to say "we need hundreds of vacation picture so that we get a few good ones!"
- Input should come from everywhere!
- We will talk later about filtering the mass of ideas.
-->

---
layout: image-left
image: /assets/funnel/funnel-idea.png
---

# Growth ideas

<v-clicks>

- **Why**
- What
- Where
- KPI

</v-clicks>

<!--
We need many ideas, an entire MIRO full of them.

KPI not only primary, but also ones that make sense. Not only more leads, but more paying customers.
-->

---
layout: iframe-left
url: https://netlight.wallbaum.dev/?group=1
fallbackImage: /assets/fallback/experiment.png
---

# Connection increases reach out

<v-clicks>

We believe users do not feel a connection with us and thus do not click "Reach out" on the landing page.

To create connection with the user we will add an image and simultaneously increase the "Reach out" buttons visibility on the landing page.

We measure conversion of the "Reach out" button and will keep an eye on "Lead conversions".

</v-clicks>

<!--
We also keep an eye on secondary metrics to ensure our experiments don't have unwanted, negative impacts.

THIS IS AN EXAMPLE!
-->

---
layout: image-left
image: /assets/funnel/funnel-idea.png
---

# Find the gems!

<v-click>

A good idea needs many ideas.

</v-click>

<br/>

<v-click>

ICE score:

- Impact
- Confidence
- Ease

</v-click>

<v-click>

4/8/9 = 7

</v-click>

---
layout: questions
---

# Input and ideas

Good ideas need many ideas!

---
layout: image-left
image: /assets/funnel/funnel-experiment.png
---

# Executing experiments

<v-click>

- Marketing campaigns
- Clever integrations

</v-click>
<v-click>

- A/B tests

</v-click>
<v-click>

```typescript {all|1|3|3-7|all}
const {group} = useRandoGroup()

if(group === 'experiment') {
  return <LandingExperiment />
} else {
  return <Landing />
}
```

</v-click>


<!--
More types:
- painted door tests.

AirBnB took off with Craigslist integrations.

While tests can be all sorts of things, our was an A/B test.
The implementation looks a bit like this.
-->

---
layout: image-left
image: /assets/funnel/funnel-experiment.png
---

# Mindset

<v-clicks>

Our goal is to learn.

No feature work!

</v-clicks>

<!--
Tell the story about working in other peoples repos.

- We didn't follow conventions, we didn't test!
- We just copied stupidly large amounts of code and changed the minimum to make our learning.
- In the end we had our own folder that we could pollute. 
-->

---
layout: questions
---

# Running experiments

Everything can and should be an experiment.

---
layout: image-left
image: /assets/funnel/funnel-analysis.png
---

# Analysis

<v-clicks>

Know your metric!

Only a small fraction makes it into production.

</v-clicks>

<!--
- We need metrics that we measure to talk about an experiment being a success or not.
- Our metric was conversion on "Reach out" clicks.
- We need tracking in place!
-->

---
layout: iframe
url: https://netlight.wallbaum.dev/results
fallbackImage: /assets/fallback/results.png
---

Results display

<!--
At the end we analyse the experiment.
- Data Engineering helps us.
- We need to check significant or not?
- Usually look at relative improvement, not percentage points.
-->

---
layout: image-display
image: /assets/growth-compounding.png
---

# Wins compound

<v-clicks>

5% every month = 80% in a year

Small wins compound 

</v-clicks>

<!-- 
It doesn't matter that the experiment today only gave us a small improvement.
We don't all have to always be like the initial example.
Here I could mention the Google Login 5%.
-->

---
layout: questions
---

# Analyze experiments

Growth teams deliver learnings.

---
layout: image-left
image: /assets/funnel/funnel.png
---
# The process

<v-clicks>

1. Find a focus area
2. Generate ideas
3. Experiment
4. Analyze
5. Implement
6. Repeat to learn

</v-clicks>

<!--
- Before we look at how you can apply this, let's recap.
- Now that we have analyzed our experiment, it is time to decide whether to implement it or not.
- Maybe we set ourselves a goal in the beginning of "we will implement if 20% increase"?
- We can for sure known (this is important!) the impact of the idea to prioritize it again other changes.
-->

---
layout: statement
emoji: 🚀
---

# Hack everything

<!--
Apply mindset to

- Marketing campaigns
- User feedback
- Team goals
- Company policies
-->

---
layout: statement
emoji: 🤝
---

# Commitment

<!--
You will hear "it takes a week", but I have seen teams take 3-6 months to learn how to do this properly.

Also depending on how much experience you can get on board.
-->

---
layout: image-left
image: /assets/rocket.jpg
---

# Apply it today

<v-clicks>

1. Get a team
2. Make sure you measure
3. Come up with "Growth Ideas"
4. Run experiments
5. Learn

</v-clicks>

<!--
- Start measuring if you aren't already
- Maybe you have some ideas already lying around.
-->

---
layout: statement
emoji: 🌱
---

# Enjoy Growing

<!--
END HERE!

Wait for applause, then move on.
-->

---
layout: image-display
image: /assets/hacking-growth.jpeg
---

# Further reading

← Book: Hacking Growth

<a href="https://growthhackers.com/">growthhackers.com</a>

---
layout: simple-intro
---

# <Emoji>🌱</Emoji> Questions?

<p></p>

<a href="mailto:hendrik.wallbaum@netlight.com">hendrik.wallbaum@netlight.com</a>

<a href="https://hendrikwallbaum.de">hendrikwallbaum.de</a>