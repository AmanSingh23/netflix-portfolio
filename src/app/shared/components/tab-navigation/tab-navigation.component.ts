import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

export interface Tab {
  id: string;
  label: string;
  disabled?: boolean;
}

@Component({
  selector: 'app-tab-navigation',
  templateUrl: './tab-navigation.component.html',
  styleUrls: ['./tab-navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabNavigationComponent {
  @Input() tabs: Tab[] = [];
  @Input() activeTabId: string = '';
  @Input() activeIndicatorColor: string = '#e50914'; // Netflix red
  @Output() tabChange = new EventEmitter<string>();

  onTabClick(tab: Tab): void {
    if (!tab.disabled && tab.id !== this.activeTabId) {
      this.tabChange.emit(tab.id);
    }
  }

  isActive(tabId: string): boolean {
    return this.activeTabId === tabId;
  }
}
