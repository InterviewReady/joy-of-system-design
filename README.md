# Game: The Joy of System Design
___Kindles the spark of system design in less than 10 minutes.___

## Step 1. The user selects a design.

The player selects a design from a list of designs.

1. YouTube Design.
2. Instagram Design.
3. TikTok Design
4. WhatsApp Design
5. Zoom Design
6. …

## Step 2. The User views the incomplete design.

Each design has a corresponding graph. In this graph, the vertices are system design components. The edges can have text as shown.

Each component type will have an image, a description, and a video URL explaining it in detail. These can be shown on hover.
<p align="center">
<img src="https://cdn.interviewready.io/instagram%20design.png">
            <i>Sample: Complete Instagram System Design (not visible to users).</i>
</p>

But the user will be shown a system that has half of its components removed. These slots will be chosen randomly every time a user asks for a design.

<p align="center">
<img src="https://cdn.interviewready.io/instagram%20blank%20design.png">
<i>Design with empty slots (visible to users).</i>
</p>

## Step 3. The User completes the design.

The player is prompted to drag and drop components into empty slots in the system.

The components types may be

1. Content Delivery Network
2. Load Balancer
3. Server
4. Database
5. …

When all empty slots have been populated, the user may submit the design by clicking on a button.

<p align="center">
<img src="https://cdn.interviewready.io/complete%20design%20instagram.png">
                                     <i>Empty slots turns white after component placement.</i>

</p>

## Step 4. View and share result.

The game can have humorous statements after every attempt:

1. YES! You aced it! ✔️
2. Wow! That was excellent! ✔️
3. Hey you, system design guru! ✔️
4. Damn! Go ahead and build your scalable app now! ✔️
5. You got the brains and the hardware! System Design for the win! ✔️
6. Wow, you could be the next cloud architect! ✔️
7. Ahh…so close! There's always a next time. ❌
8. Oops! The design was almost there, almost… ❌
9. Uh oh…that's not right! Come on, try again! ❌

Players may "View Explanation" under this message. This should show the user why their design isn't correct, along with each incorrect slot in red and it's corresponding right answer.

<p align="center">
<img src="https://cdn.interviewready.io/incorrect%20image%20instagram.png">
</p>

Sample explanation with placeholders in brackets:

1. You should use a (load balancer) here! A (CDN) is not suited for (balancing requests)!
   To know more about (load balancer), click here [link opening load balancer video in new tab].
2. That's right, good job using an (Application Server)[link opening Application Server video in new tab] here.
3. That's right, good job using a (CDN)[link opening CDN video in new tab] here.
4. You should use a (database) here! An (Application Server) is not suited for (storing data)!
   To know more about (databases), click here [link opening databases video in new tab].

The user ends with three options:

1. Try the game again in case of failure (Reset the design page). 
2. Share the challenge with friends (link sharing to design page).
3. Try another design (Go to listing page).

#### You can view the engineering requirement documents [here](https://cdn.interviewready.io/Joy+Of+System+Design_+Engineering+Requirements.pdf).

#### You can download the game requirements [here](https://cdn.interviewready.io/The+joy+of+System+Design+-+v2.pdf).
