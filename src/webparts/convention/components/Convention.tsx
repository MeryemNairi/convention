import * as React from 'react';
import HotelsVoyages from './HotelsVoyages';
import ServicesBancaires from './ServicesBancaires';
import ImmobilierLogement from './ImmobilierLogement';
import SolutionsAssurance from './SolutionsAssurance';
import MaisonArtCulinaire from './MaisonArtCulinaire';
import LoisirsDetenteAquatique from './LoisirsDetenteAquatique';


const categories = [
  {
    id: 1,
    name: 'Hôtels  & Voyages',
    icon: (
      <svg width="25" height="25" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_30_25)">
          <path d="M0 1.875C0 0.837891 0.89375 0 2 0H30C31.1063 0 32 0.837891 32 1.875C32 2.91211 31.1063 3.75 30 3.75V26.25C31.1063 26.25 32 27.0879 32 28.125C32 29.1621 31.1063 30 30 30H19V27.1875C19 25.6348 17.6562 24.375 16 24.375C14.3438 24.375 13 25.6348 13 27.1875V30H2C0.89375 30 0 29.1621 0 28.125C0 27.0879 0.89375 26.25 2 26.25V3.75C0.89375 3.75 0 2.91211 0 1.875ZM6 6.5625V8.4375C6 8.95313 6.45 9.375 7 9.375H9C9.55 9.375 10 8.95313 10 8.4375V6.5625C10 6.04687 9.55 5.625 9 5.625H7C6.45 5.625 6 6.04687 6 6.5625ZM15 5.625C14.45 5.625 14 6.04687 14 6.5625V8.4375C14 8.95313 14.45 9.375 15 9.375H17C17.55 9.375 18 8.95313 18 8.4375V6.5625C18 6.04687 17.55 5.625 17 5.625H15ZM22 6.5625V8.4375C22 8.95313 22.45 9.375 23 9.375H25C25.55 9.375 26 8.95313 26 8.4375V6.5625C26 6.04687 25.55 5.625 25 5.625H23C22.45 5.625 22 6.04687 22 6.5625ZM7 11.25C6.45 11.25 6 11.6719 6 12.1875V14.0625C6 14.5781 6.45 15 7 15H9C9.55 15 10 14.5781 10 14.0625V12.1875C10 11.6719 9.55 11.25 9 11.25H7ZM14 12.1875V14.0625C14 14.5781 14.45 15 15 15H17C17.55 15 18 14.5781 18 14.0625V12.1875C18 11.6719 17.55 11.25 17 11.25H15C14.45 11.25 14 11.6719 14 12.1875ZM23 11.25C22.45 11.25 22 11.6719 22 12.1875V14.0625C22 14.5781 22.45 15 23 15H25C25.55 15 26 14.5781 26 14.0625V12.1875C26 11.6719 25.55 11.25 25 11.25H23ZM20.5 22.5C21.3313 22.5 22.0187 21.8613 21.8125 21.1055C21.15 18.6738 18.8 16.875 16 16.875C13.2 16.875 10.8438 18.6738 10.1875 21.1055C9.98125 21.8555 10.675 22.5 11.5 22.5H20.5Z" fill="#00966C" />
        </g>
        <defs>
          <clipPath id="clip0_30_25">
            <rect width="32" height="30" fill="white" />
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    id: 2,
    name: 'Services Bancaires',
    icon: (<svg width="30" height="30" viewBox="0 0 36 39" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.25 1.625L3 9.75V13H31.5V9.75M24 16.25V27.625H28.5V16.25M3 35.75H31.5V30.875H3M15 16.25V27.625H19.5V16.25M6 16.25V27.625H10.5V16.25H6Z" fill="#00966C" />
    </svg>

    )
  },
  {
    id: 3, name: 'Immobilier & Logement',
    icon: (<svg width="30" height="30" viewBox="0 0 54 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M27.5864 10.8797C27.4294 10.7267 27.2205 10.6413 27.0032 10.6413C26.7859 10.6413 26.5769 10.7267 26.4199 10.8797L7.00311 29.772C6.92065 29.8523 6.85505 29.9489 6.81027 30.0558C6.7655 30.1627 6.74248 30.2777 6.7426 30.3939L6.73944 48.125C6.73944 49.0367 7.09502 49.911 7.72796 50.5557C8.36089 51.2003 9.21934 51.5625 10.1144 51.5625H20.25C20.6975 51.5625 21.1268 51.3814 21.4432 51.0591C21.7597 50.7368 21.9375 50.2996 21.9375 49.8438V35.2344C21.9375 35.0065 22.0264 34.7879 22.1846 34.6267C22.3429 34.4655 22.5575 34.375 22.7812 34.375H31.2187C31.4425 34.375 31.6571 34.4655 31.8154 34.6267C31.9736 34.7879 32.0625 35.0065 32.0625 35.2344V49.8438C32.0625 50.2996 32.2403 50.7368 32.5567 51.0591C32.8732 51.3814 33.3024 51.5625 33.75 51.5625H43.8813C44.7764 51.5625 45.6349 51.2003 46.2678 50.5557C46.9007 49.911 47.2563 49.0367 47.2563 48.125V30.3939C47.2564 30.2777 47.2334 30.1627 47.1887 30.0558C47.1439 29.9489 47.0783 29.8523 46.9958 29.772L27.5864 10.8797Z" fill="#00966C" />
      <path d="M51.7757 26.2271L43.8866 18.5399V6.875C43.8866 6.41916 43.7088 5.98199 43.3924 5.65966C43.0759 5.33733 42.6467 5.15625 42.1991 5.15625H37.1366C36.6891 5.15625 36.2598 5.33733 35.9434 5.65966C35.6269 5.98199 35.4491 6.41916 35.4491 6.875V10.3125L29.3404 4.36348C28.7687 3.7748 27.9186 3.4375 27 3.4375C26.0845 3.4375 25.2366 3.7748 24.6649 4.36455L2.23173 26.2249C1.57571 26.8694 1.49345 27.9297 2.0904 28.6279C2.2403 28.8042 2.42385 28.9475 2.62987 29.0492C2.83589 29.1509 3.06008 29.2089 3.28878 29.2195C3.51748 29.2302 3.74592 29.1933 3.9602 29.1112C4.17447 29.029 4.37009 28.9034 4.53517 28.7418L26.4199 7.44219C26.577 7.2892 26.7859 7.20381 27.0032 7.20381C27.2205 7.20381 27.4294 7.2892 27.5864 7.44219L49.4733 28.7418C49.7957 29.0567 50.2275 29.2286 50.6741 29.2197C51.1208 29.2108 51.5457 29.022 51.8558 28.6945C52.5034 28.0113 52.4496 26.8834 51.7757 26.2271Z" fill="#00966C" />
    </svg>
    )
  },

  {
    id: 4, name: 'Solutions de Assurance',
    icon: (<svg width="30" height="30" viewBox="0 0 68 78" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.0095 34.06C39.4782 33.4507 38.7576 33.1084 38.0063 33.1084C37.255 33.1084 36.5345 33.4507 36.0032 34.06L34 36.3545C32.9312 37.5385 31.4998 38.1937 30.014 38.1789C28.5283 38.1641 27.107 37.4805 26.0563 36.2753C25.0057 35.0702 24.4097 33.4399 24.3968 31.7356C24.3839 30.0313 24.9551 28.3894 25.9873 27.1635L41.939 8.8595C45.7156 7.87419 49.6669 8.27969 53.2311 10.0184C56.7952 11.757 59.7908 14.7404 61.7918 18.5441C63.7928 22.3479 64.6975 26.7785 64.3771 31.2059C64.0567 35.6334 62.5276 39.8322 60.0072 43.2055L54.0345 50.1442L40.0095 34.06ZM8.95615 14.521C11.888 11.1585 15.7228 9.02843 19.8406 8.47524C23.9584 7.92205 28.1185 8.97804 31.6483 11.4725L21.9782 22.568C19.8837 24.9656 18.6899 28.2077 18.6516 31.6016C18.6134 34.9954 19.7338 38.2718 21.7735 40.7307C23.8132 43.1896 26.6104 44.636 29.5674 44.7608C32.5244 44.8855 35.4066 43.6788 37.5983 41.3985L38.0063 40.9532L50.0282 54.7398L38.0063 68.5295C36.9437 69.7481 35.5026 70.4326 34 70.4326C32.4974 70.4326 31.0563 69.7481 29.9937 68.5295L8.95332 44.395C5.49986 40.4333 3.55975 35.0604 3.55975 29.458C3.55975 23.8556 5.50269 18.4827 8.95615 14.521Z" fill="#00966C" />
    </svg>

    )
  },

  {
    id: 5, name: 'Maison & Art Culinaire',
    icon: (<svg width="30" height="30" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M29.75 30.25V15.125C29.75 8.29056 24.0415 2.75 17 2.75C9.95846 2.75 4.25 8.29056 4.25 15.125V30.25" stroke="#00966C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17 29.5625C20.9121 29.5625 24.0833 23.4066 24.0833 15.8125H9.91666C9.91666 23.4066 13.0879 29.5625 17 29.5625Z" fill="#00966C" stroke="#00966C" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
    )
  },
  {
    id: 6, name: 'Loisirs & Détente Aquatique',
    icon: (<svg width="30" height="30" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_49_27)">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0C17.713 0 21.274 1.63303 23.8995 4.53984C26.525 7.44666 28 11.3891 28 15.5C28 19.6109 26.525 23.5533 23.8995 26.4602C21.274 29.367 17.713 31 14 31C10.287 31 6.72601 29.367 4.1005 26.4602C1.475 23.5533 0 19.6109 0 15.5C0 11.3891 1.475 7.44666 4.1005 4.53984C6.72601 1.63303 10.287 0 14 0ZM21.78 18.3077C21.78 18.0141 21.6746 17.7325 21.4871 17.5248C21.2996 17.3172 21.0452 17.2006 20.78 17.2006H7.22C6.95478 17.2006 6.70043 17.3172 6.51289 17.5248C6.32536 17.7325 6.22 18.0141 6.22 18.3077C6.22 19.6806 6.812 21.5472 8.05 23.0684C9.32 24.6339 11.282 25.8496 14 25.8496C16.72 25.8496 18.68 24.6317 19.95 23.0706C21.188 21.5472 21.78 19.6828 21.78 18.3077ZM18.97 6.81557C18.8057 6.81557 18.643 6.85144 18.4912 6.92113C18.3394 6.99081 18.2015 7.09295 18.0854 7.2217C17.9693 7.35044 17.8773 7.50327 17.8146 7.67143C17.7519 7.83959 17.7197 8.01979 17.72 8.20171V9.28893H16.74C16.4085 9.28893 16.0905 9.43473 15.8561 9.69427C15.6217 9.95381 15.49 10.3058 15.49 10.6729C15.49 11.0399 15.6217 11.3919 15.8561 11.6514C16.0905 11.911 16.4085 12.0568 16.74 12.0568H17.72V13.1418C17.72 13.5088 17.8517 13.8608 18.0861 14.1204C18.3205 14.3799 18.6385 14.5257 18.97 14.5257C19.3015 14.5257 19.6195 14.3799 19.8539 14.1204C20.0883 13.8608 20.22 13.5088 20.22 13.1418V12.0568H21.204C21.5355 12.0568 21.8535 11.911 22.0879 11.6514C22.3223 11.3919 22.454 11.0399 22.454 10.6729C22.454 10.3058 22.3223 9.95381 22.0879 9.69427C21.8535 9.43473 21.5355 9.28893 21.204 9.28893H20.22V8.20171C20.22 7.83467 20.0883 7.48267 19.8539 7.22313C19.6195 6.96359 19.3015 6.81557 18.97 6.81557ZM9.03 6.81557C9.72 6.81557 10.28 7.43557 10.28 8.1995V9.28893H11.26C11.5915 9.28893 11.9095 9.43473 12.1439 9.69427C12.3783 9.95381 12.51 10.3058 12.51 10.6729C12.51 11.0399 12.3783 11.3919 12.1439 11.6514C11.9095 11.911 11.5915 12.0568 11.26 12.0568H10.28V13.1418C10.28 13.5088 10.1483 13.8608 9.91388 14.1204C9.67946 14.3799 9.36152 14.5257 9.03 14.5257C8.69848 14.5257 8.38054 14.3799 8.14612 14.1204C7.9117 13.8608 7.78 13.5088 7.78 13.1418V12.0568H6.796C6.46448 12.0568 6.14654 11.911 5.91212 11.6514C5.6777 11.3919 5.546 11.0399 5.546 10.6729C5.546 10.3058 5.6777 9.95381 5.91212 9.69427C6.14654 9.43473 6.46448 9.28893 6.796 9.28893H7.78V8.1995C7.78 7.43557 8.34 6.81557 9.03 6.81557Z" fill="#00966C" />
      </g>
      <defs>
        <clipPath id="clip0_49_27">
          <rect width="28" height="31" fill="white" />
        </clipPath>
      </defs>
    </svg>

    )
  }
];


export default function Convention() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("");
  const [categorySelected, setCategorySelected] = React.useState<boolean>(false);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCategorySelected(true);
  };


  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '250px', borderRight: '1px solid #ccc', padding: '20px', backgroundColor: '#EEFFF6' }}>
        {!categorySelected && (
          <div>

          </div>
        )}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => handleCategoryClick(category.name)}
              style={{
                padding: '10px 15px',
                cursor: 'pointer',
                backgroundColor: selectedCategory === category.name ? '#e0e0e0' : '#EEFFF6',
                marginBottom: '5px',
                borderRadius: '4px',
                transition: 'background-color 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                fontWeight: 'bold'
              }}
            >
              {category.icon}
              <span style={{ marginLeft: '10px' }}>{category.name}</span>
            </li>
          ))}
        </ul>
      </div>
      <div style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        {categorySelected ? (
          <>
            <h1>{selectedCategory}</h1>
            {selectedCategory === 'Hôtels  & Voyages' && <HotelsVoyages />}
            {selectedCategory === 'Services Bancaires' && <ServicesBancaires />}
            {selectedCategory === 'Immobilier & Logement' && <ImmobilierLogement />}
            {selectedCategory === 'Solutions de Assurance' && <SolutionsAssurance />}
            {selectedCategory === 'Maison & Art Culinaire' && <MaisonArtCulinaire />}
            {selectedCategory === 'Loisirs & Détente Aquatique' && <LoisirsDetenteAquatique />}
          </>
        ) : (
          <div>
            <h1><strong>Découvrez l'univers des conventions avec Cnexia</strong></h1>
            <img src="https://cnexia.sharepoint.com/sites/CnexiaForEveryone/_api/web/GetFolderByServerRelativeUrl('/sites/CnexiaForEveryone/Assets')/Files('convetion.jpg')/$value" alt="Convention Image" />
            <p  style={{ fontSize: '18px', fontWeight: 'bold' }} >
              Les conventions sont des occasions inestimables de réseautage, d'apprentissage et de croissance. Que vous soyez un professionnel chevronné ou un nouvel arrivant dans votre domaine, participer à des conventions vous permet de rester à jour avec les dernières tendances, de rencontrer des experts et d'échanger des idées innovantes.
            </p>
            <p  style={{ fontSize: '18px' ,fontWeight: 'bold'}}>
              Nous vous invitons à parcourir nos différentes catégories de conventions pour trouver celle qui correspond le mieux à vos intérêts et objectifs professionnels. Que vous soyez intéressé par la technologie, le marketing, la finance ou d'autres domaines, nous avons des conventions conçues spécialement pour répondre à vos besoins. Explorez dès maintenant et découvrez les opportunités qui vous attendent !
            </p>
          </div>
        )}
      </div>
    </div>
  );
}