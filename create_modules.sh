#!/bin/bash

modules=("certifications" "recommendations" "projects" "music" "reading" "blogs" "contact")

for module in "${modules[@]}"; do
    # Create component files
    cat > "src/app/features/portfolio-sections/$module/$module.component.ts" << EOL
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-$module',
  templateUrl: './$module.component.html',
  styleUrls: ['./$module.component.scss']
})
export class ${module^}Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
EOL

    # Create HTML files
    cat > "src/app/features/portfolio-sections/$module/$module.component.html" << EOL
<div class="$module-container">
  <app-header></app-header>
  <main class="$module-main">
    <div class="$module-content">
      <h1 class="$module-title">${module^}</h1>
      <p class="$module-description">$module details will be displayed here.</p>
      <div class="$module-placeholder">
        <p>$module content coming soon.</p>
      </div>
    </div>
  </main>
</div>
EOL

    # Create SCSS files
    cat > "src/app/features/portfolio-sections/$module/$module.component.scss" << EOL
.$module-container {
  min-height: 100vh;
  background: #141414;
  color: #ffffff;
}

.$module-main {
  padding-top: 70px;
  padding: 70px 4% 40px;
}

.$module-content {
  max-width: 1200px;
  margin: 0 auto;
}

.$module-title {
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: #ffffff;
}

.$module-description {
  font-size: 18px;
  color: #b3b3b3;
  margin: 0 0 40px 0;
  line-height: 1.6;
}

.$module-placeholder {
  background: rgba(255, 255, 255, 0.05);
  padding: 40px;
  border-radius: 8px;
  text-align: center;
  color: #b3b3b3;
}
EOL

    # Create module files
    cat > "src/app/features/portfolio-sections/$module/$module.module.ts" << EOL
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../../shared/shared.module';

import { ${module^}Component } from './$module.component';

const routes = [
  {
    path: '',
    component: ${module^}Component
  }
];

@NgModule({
  declarations: [
    ${module^}Component
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ${module^}Module { }
EOL

done

echo "All modules created successfully!"
