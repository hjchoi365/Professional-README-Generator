const renderLicenseBadge = license => {
    if (license === null || license === "")
    {
      return ``;
    }
    else
    {
    let li = "https://shields.io/badge/license-"+license+"-blue.svg";
    return `${li}`;
    }
  };

const renderLicenseLink = license => {
    if (license === "MIT")
    {
      return `https://choosealicense.com/licenses/mit/`;
    }
    else if (license === "Apache")
    {
      return `https://choosealicense.com/licenses/apache-2.0/`;
    }
    else if (license === "GPLv3")
    {
      return `https://choosealicense.com/licenses/gpl-3.0/`;
    }
    else if (license === "Unlicense")
    {
      return `https://choosealicense.com/licenses/unlicense/`;
    }
    else 
    {
      return ``;
    }
  };
