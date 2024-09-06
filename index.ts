import { inject, ComponentFactoryResolver } from '@angular/core';

// no-deprecated is reported for this:
const f1: ComponentFactoryResolver = new ComponentFactoryResolver();

// But it is not reported for this:
const f2: ComponentFactoryResolver = inject(ComponentFactoryResolver);
