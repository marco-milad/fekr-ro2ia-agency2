export function loadNavbar() {
  return `
    <nav class="navbar navbar-expand-lg p-5 fixed-top bg-white shadow-sm">
      <div class="container d-flex justify-content-around align-items-around">
         <a class="navbar-brand " href="#">
   <img src="./images/logo2.png" alt="شعار الشركة"  class="d-inline-block align-text-top" />
 </a>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item"><a class="nav-link active" href="#home">الرئيسية</a></li>

    
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        خدمات الدعاية و الاعلان
    </a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#vision">تجهيز المعارض</a></li>
        <li><a class="dropdown-item" href="#team">  الهويةالموحدة</a></li>
        <li><a class="dropdown-item" href="#team"> بناء وتصميم العلامة التجارية</a></li>
        <li><a class="dropdown-item" href="#team"> التصميم الرقمي و الجرافيكي</a></li>
        <li><a class="dropdown-item" href="#team">الطباعة والحلول الدعائية والاعلانية </a></li>
        <li><a class="dropdown-item" href="#team">التسويق الالكتروني </a></li>
      </ul>
     </li>

    <!-- خدماتنا Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#services" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  خدمات الصناعة 
</a>
      <ul class="dropdown-menu">
        <li><a class="dropdown-item" href="#marketing"> الاستندات</a></li>
        <li><a class="dropdown-item" href="#design"> لوحات الطرق  </a></li>
        <li><a class="dropdown-item" href="#consulting"> الدروع التذكارية </a></li>
        <li><a class="dropdown-item" href="#consulting"> الهدايا الدعاية  </a></li>
      </ul>
    </li>

     <li class="nav-item"><a class="nav-link" href="#contact">  متجرنا </a></li>
    <li class="nav-item"><a class="nav-link" href="#contact">تواصل معنا</a></li>
  </ul>
</div>

       

      </div>
    </nav>
  `;
}
