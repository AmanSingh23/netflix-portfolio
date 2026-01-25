#!/bin/bash

# Create placeholder images using ImageMagick or fallback to simple text files
create_placeholder() {
    local width=$1
    local height=$2
    local filename=$3
    local text=$4
    local bgcolor=${5:-"#141414"}
    local textcolor=${6:-"#ffffff"}
    
    # Try ImageMagick first
    if command -v convert &> /dev/null; then
        convert -size ${width}x${height} xc:"$bgcolor" \
                -fill "$textcolor" \
                -gravity center \
                -pointsize 24 \
                -annotate +0+0 "$text" \
                "src/assets/images/$filename"
    else
        # Fallback: create a simple text file with image info
        echo "Placeholder Image: $text (${width}x${height})" > "src/assets/images/$filename.txt"
    fi
}

# Create profile avatars
create_placeholder 200 200 "profiles/aman-avatar.png" "AMAN" "#E50914"
create_placeholder 200 200 "profiles/rapso-avatar.png" "Rapso" "#221F1F"
create_placeholder 200 200 "profiles/children-avatar.png" "Children" "#564D4D"
create_placeholder 200 200 "profiles/popa-avatar.png" "popa" "#B81D13"

# Create content images
create_placeholder 400 225 "content/work-permit.jpg" "Work Permit" "#1a1a1a"
create_placeholder 200 112 "content/work-permit-thumb.jpg" "Work Permit" "#1a1a1a"
create_placeholder 400 225 "content/skills.jpg" "Skills" "#1a1a1a"
create_placeholder 200 112 "content/skills-thumb.jpg" "Skills" "#1a1a1a"
create_placeholder 400 225 "content/experience.jpg" "Experience" "#1a1a1a"
create_placeholder 200 112 "content/experience-thumb.jpg" "Experience" "#1a1a1a"
create_placeholder 400 225 "content/certifications.jpg" "Certifications" "#1a1a1a"
create_placeholder 200 112 "content/certifications-thumb.jpg" "Certifications" "#1a1a1a"
create_placeholder 400 225 "content/recommendations.jpg" "Recommendations" "#1a1a1a"
create_placeholder 200 112 "content/recommendations-thumb.jpg" "Recommendations" "#1a1a1a"
create_placeholder 400 225 "content/projects.jpg" "Projects" "#1a1a1a"
create_placeholder 200 112 "content/projects-thumb.jpg" "Projects" "#1a1a1a"
create_placeholder 400 225 "content/music.jpg" "Music" "#1a1a1a"
create_placeholder 200 112 "content/music-thumb.jpg" "Music" "#1a1a1a"
create_placeholder 400 225 "content/reading.jpg" "Reading" "#1a1a1a"
create_placeholder 200 112 "content/reading-thumb.jpg" "Reading" "#1a1a1a"
create_placeholder 400 225 "content/blogs.jpg" "Blogs" "#1a1a1a"
create_placeholder 200 112 "content/blogs-thumb.jpg" "Blogs" "#1a1a1a"
create_placeholder 400 225 "content/contact.jpg" "Contact" "#1a1a1a"
create_placeholder 200 112 "content/contact-thumb.jpg" "Contact" "#1a1a1a"

echo "Placeholder images created successfully!"
