import { inject, ComponentFactoryResolver } from '@angular/core';
import { Foo } from './foo';

// no-deprecated is reported for this:
const f1: ComponentFactoryResolver = new ComponentFactoryResolver();

// But it is not reported for this:
const f2: ComponentFactoryResolver = inject(ComponentFactoryResolver);

// An import from another file is also not reported.
const f3: Foo = inject(Foo);

/**
 * @deprecated
 */
class Bar {}

// This is reported:
const b: Bar = inject(Bar);
