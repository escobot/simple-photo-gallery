# Simple Photo Gallery
This project provides a straightforward and user-friendly photo gallery application using simple HTML, CSS, and JavaScript. View and organize your photos in a clean and intuitive interface.

## Features
- Photo Viewing: Browse and view photos in a grid layout or carousel.
- Photo Organization: Organize photos into different albums.
- Responsive Design: The gallery is designed to be responsive and accessible on various devices.

| Grid layout | Carousel |
|----------|----------|
|   ![image](https://github.com/escobot/simple-photo-gallery/assets/20388583/2f4d3eee-edab-4954-ae07-69fee05f379f)   |   ![image](https://github.com/escobot/simple-photo-gallery/assets/20388583/24aedd0b-e642-42b5-93ba-62c9c71aa526)   |

## Getting Started

### Prerequisites
A web browser (e.g., Chrome, Firefox, Safari)

### Installation
Clone the repository:

```bash
git clone https://github.com/escobot/simple-photo-gallery.git
cd simple-photo-gallery
```

Open the gallery:

Open the `index.html` file in your web browser to view and use the photo gallery.

## Usage

### Viewing Photos
- Photos are displayed in a grid layout.
- Click on a photo to view it in the carousel.

### Organizing Photos
Each album is a folder named `<year>-<place>` (e.g. `2024-queretaro`). To add one:

1. Put the photos in `originals/<year>-<place>/`, named `01.jpg`, `02.jpg`, ...
   (`originals/` is not committed).
2. Run `./resize.sh` (macOS) to generate the lightbox images in `img/` and the grid thumbnails in `thumbs/`.
3. Add a line to the `trips` list in `index.html`:
   `{ id: '2024-queretaro', label: "Queretaro '24", count: 10 },`

Link straight to an album with `index.html#2024-queretaro`.
