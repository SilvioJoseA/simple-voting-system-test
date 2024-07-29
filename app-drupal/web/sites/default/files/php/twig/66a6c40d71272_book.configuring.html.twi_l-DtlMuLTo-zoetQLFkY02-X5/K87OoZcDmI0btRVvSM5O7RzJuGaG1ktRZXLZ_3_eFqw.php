<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* @help_topics/book.configuring.html.twig */
class __TwigTemplate_83fa67a303910a458087557198047478 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension(SandboxExtension::class);
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 9
        $context["settings_link_text"] = ('' === $tmp = \Twig\Extension\CoreExtension::captureOutput((function () use (&$context, $macros, $blocks) {
            yield t("Settings", array());
            return; yield '';
        })())) ? '' : new Markup($tmp, $this->env->getCharset());
        // line 10
        $context["settings_link"] = $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\help\HelpTwigExtension']->getRouteLink($this->sandbox->ensureToStringAllowed(($context["settings_link_text"] ?? null), 10, $this->source), "book.settings"));
        // line 11
        yield "<h2>";
        yield t("Goal", array());
        yield "</h2>
<p>";
        // line 12
        yield t("Configure settings related to books.", array());
        yield "</p>
<h2>";
        // line 13
        yield t("Steps", array());
        yield "</h2>
<ol>
  <li>";
        // line 15
        yield t("In the <em>Manage</em> administrative menu, navigate to <em>Structure</em> &gt; <em>Books</em> &gt; <em>@settings_link</em>.", array("@settings_link" => ($context["settings_link"] ?? null), ));
        yield "</li>
  <li>";
        // line 16
        yield t("Check all of the content types that you would like to use as book pages in the <em>Content types allowed in book outlines</em> field.", array());
        yield "</li>
  <li>";
        // line 17
        yield t("In the <em>Content type for the Add child page link</em> field, select the content type that will be created from the <em>Add child page</em> link on a book page.", array());
        yield "</li>
  <li>";
        // line 18
        yield t("Click <em>Save configuration</em>.", array());
        yield "</li>
</ol>";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName()
    {
        return "@help_topics/book.configuring.html.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable()
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo()
    {
        return array (  73 => 18,  69 => 17,  65 => 16,  61 => 15,  56 => 13,  52 => 12,  47 => 11,  45 => 10,  40 => 9,);
    }

    public function getSourceContext()
    {
        return new Source("", "@help_topics/book.configuring.html.twig", "C:\\xampp1\\htdocs\\appChallenge\\app-drupal\\web\\core\\modules\\book\\help_topics\\book.configuring.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 9, "trans" => 9);
        static $filters = array("escape" => 15);
        static $functions = array("render_var" => 10, "help_route_link" => 10);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'trans'],
                ['escape'],
                ['render_var', 'help_route_link'],
                $this->source
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
