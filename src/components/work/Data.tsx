import Work1 from '../../assets/SetiaKawanKonveksi.jpg'; 
import Work2 from '../../assets/javascriptSertificate.jpg'; 
import Work3 from '../../assets/BasisData.jpg'; 
import Work4 from '../../assets/DesaCintarajaSertif.jpg'; 
import Work5 from '../../assets/DesaCintaraja .jpg'; 
import javascriptSertificate from '../../assets/Certificate-ItBox.pdf';
import certificateBasisData from '../../assets/Sertifikat_Profesi _basis data.pdf';
import certificateKemitraan from '../../assets/Certificate_Kemitraan_DesaCintaraja.pdf';



export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: 'Setiakawan konveksi',
    category: 'web',
    link: 'https://setiakawankonveksi1.com/',
  },
  {
    id: 2,
    image: Work2,
    title: 'Certificate Javascript',
    category: 'certificate',
    link : javascriptSertificate,
  },
  {
    id: 3,
    image: Work3,
    title: 'Certificate Basis Data',
    category: 'certificate',
    link : certificateBasisData,
  },
  {
    id: 4,
    image: Work4,
    title: 'Certificate Kemitraan Desa Cintaraja',
    category: 'certificate',
    link : certificateKemitraan,
  },
  {
    id: 5,
    image: Work5,
    title: 'Desa Cintaraja',
    category: 'web',
    link: 'https://desacintaraja.my.id/',
  },
];



export const ProjectsNav = [
    {
        name:'all',
    },
    {
        name:'web',
    },
    {
        name:'certificate',
    },
]